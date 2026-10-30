import { useEffect, useMemo, useState } from 'react';
import { categories, lessonCards, phrases, vocabulary } from './data/lessons';

type LanguageCode = 'es' | 'en' | 'zh' | 'ja';

type Phrase = (typeof phrases)[number];

type PersistedProgress = {
  xp: number;
  streak: number;
  completed: string[];
  lastDay: string;
};

const STORAGE_KEY = 'linguamix-progress-v2';
const languageMeta: Record<LanguageCode, { label: string; accent: string; flag: string }> = {
  es: { label: 'Español', accent: 'es-ES', flag: '🇪🇸' },
  en: { label: 'English', accent: 'en-US', flag: '🇺🇸' },
  zh: { label: '中文', accent: 'zh-CN', flag: '🇨🇳' },
  ja: { label: '日本語', accent: 'ja-JP', flag: '🇯🇵' }
};

const readProgress = (): PersistedProgress => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return { xp: 0, streak: 1, completed: [], lastDay: '' };
  }

  try {
    const parsed = JSON.parse(saved) as Partial<PersistedProgress>;
    return {
      xp: Number(parsed.xp ?? 0),
      streak: Number(parsed.streak ?? 1),
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      lastDay: typeof parsed.lastDay === 'string' ? parsed.lastDay : ''
    };
  } catch {
    return { xp: 0, streak: 1, completed: [], lastDay: '' };
  }
};

const todayKey = () => new Date().toISOString().slice(0, 10);

const speakText = (language: LanguageCode, text: string) => {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageMeta[language].accent;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

const speakSequence = (texts: Array<{ language: LanguageCode; text: string }>) => {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  let index = 0;

  const playNext = () => {
    if (index >= texts.length) return;

    const entry = texts[index];
    const utterance = new SpeechSynthesisUtterance(entry.text);
    utterance.lang = languageMeta[entry.language].accent;
    utterance.rate = 0.86;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onend = () => {
      index += 1;
      playNext();
    };

    window.speechSynthesis.speak(utterance);
  };

  playNext();
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focusLanguage, setFocusLanguage] = useState<LanguageCode>('es');
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [dailyIndex, setDailyIndex] = useState(0);
  const [progress, setProgress] = useState<PersistedProgress>(() => readProgress());

  const filteredPhrases = useMemo(() => {
    return selectedCategory === 'Todos'
      ? phrases
      : phrases.filter((phrase) => phrase.category === selectedCategory);
  }, [selectedCategory]);

  const currentPhrase = filteredPhrases[currentIndex % Math.max(filteredPhrases.length, 1)] ?? phrases[0];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    const dayKey = todayKey();
    if (progress.lastDay !== dayKey) {
      const nextStreak = progress.lastDay ? progress.streak + 1 : 1;
      setProgress((prev) => ({
        ...prev,
        streak: nextStreak,
        lastDay: dayKey
      }));
    }
  }, []);

  const addXp = (amount: number, id: string) => {
    setProgress((prev) => {
      const completed = prev.completed.includes(id) ? prev.completed : [...prev.completed, id];
      return {
        ...prev,
        xp: prev.xp + amount,
        completed
      };
    });
  };

  const nextPhrase = () => {
    if (filteredPhrases.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredPhrases.length);
    addXp(12, currentPhrase.id);
    setQuizResult(null);
  };

  const markAsLearned = () => {
    addXp(25, `${currentPhrase.id}-learned`);
    setQuizResult('¡Hecho! Esa frase ya quedó en tu memoria.');
  };

  const dailyPhrase = phrases[dailyIndex % phrases.length];

  const quizOptions = useMemo(() => {
    const correct = currentPhrase.english;
    const wrongs = phrases
      .filter((phrase) => phrase.id !== currentPhrase.id)
      .map((phrase) => phrase.english);

    const pool = [...new Set([...wrongs, correct])];
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [currentPhrase]);

  const answerQuiz = (option: string) => {
    if (option === currentPhrase.english) {
      setQuizResult('¡Correcto! +35 XP de recompensa.');
      addXp(35, `${currentPhrase.id}-quiz`);
      return;
    }

    setQuizResult('Casi: escucha otra vez la frase y prueba de nuevo.');
  };

  const totalCompleted = progress.completed.length;
  const completionPercent = Math.min((totalCompleted / Math.max(phrases.length, 1)) * 100, 100);
  const level = Math.floor(progress.xp / 150) + 1;
  const streakLabel = `${progress.streak} días`;

  const languageValues = (['es', 'en', 'zh', 'ja'] as LanguageCode[]).map((code) => ({
    code,
    label: languageMeta[code].label,
    flag: languageMeta[code].flag,
    value:
      code === 'es'
        ? currentPhrase.spanish
        : code === 'en'
          ? currentPhrase.english
          : code === 'zh'
            ? currentPhrase.chinese
            : currentPhrase.japanese
  }));

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Aprendizaje creativo</p>
          <h1>LinguaMix 4 Idiomas</h1>
          <p className="subtitle">Español + inglés + chino + japonés, aprendiendo juntos.</p>
        </div>

        <div className="topbar-badges">
          <span className="badge pulse">Nivel {level}</span>
          <span className="badge">🔥 {streakLabel}</span>
          <span className="badge">✨ {progress.xp} XP</span>
        </div>
      </header>

      <section className="hero-metrics">
        <div className="metric-card glow-cyan">
          <span>Racha</span>
          <strong>{progress.streak}</strong>
          <small>días seguidos</small>
        </div>
        <div className="metric-card glow-violet">
          <span>XP total</span>
          <strong>{progress.xp}</strong>
          <small>sin límites</small>
        </div>
        <div className="metric-card glow-green">
          <span>Progreso</span>
          <strong>{Math.round(completionPercent)}%</strong>
          <small>memorizado</small>
        </div>
        <div className="metric-card glow-gold">
          <span>Logros</span>
          <strong>{totalCompleted}</strong>
          <small>frases dominadas</small>
        </div>
      </section>

      <main className="main-grid">
        <section className="panel spotlight-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Frase del día</p>
              <h2>Aprender con 4 traducciones a la vez</h2>
            </div>
            <div className="header-actions">
              <button className="secondary-btn" onClick={() => speakSequence([
                { language: 'es', text: currentPhrase.spanish },
                { language: 'en', text: currentPhrase.english },
                { language: 'zh', text: currentPhrase.chinese },
                { language: 'ja', text: currentPhrase.japanese }
              ])}>
                🔊 Escuchar todo
              </button>
              <button className="primary-btn" onClick={nextPhrase}>Siguiente frase</button>
            </div>
          </div>

          <div className="category-row">
            {['Todos', ...categories].map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="focus-row">
            {(['es', 'en', 'zh', 'ja'] as LanguageCode[]).map((code) => (
              <button
                key={code}
                className={focusLanguage === code ? 'focus-pill active' : 'focus-pill'}
                onClick={() => setFocusLanguage(code)}
              >
                {languageMeta[code].flag} {languageMeta[code].label}
              </button>
            ))}
          </div>

          <div className="phrase-card">
            <div className="phrase-header">
              <span className="tag">{currentPhrase.category}</span>
              <span className="level">Nivel {currentPhrase.level}</span>
            </div>

            <h3 className="phrase-base">{currentPhrase.spanish}</h3>
            <p className="phrase-tip">{currentPhrase.tip}</p>

            <div className="translation-grid">
              {languageValues.map(({ code, label, flag, value }) => (
                <article key={code} className={focusLanguage === code ? 'translation-box active' : 'translation-box'}>
                  <div className="translation-top">
                    <span className="language-name">{flag} {label}</span>
                    <button className="listen-btn" onClick={() => speakText(code, value)} aria-label={`Escuchar ${label}`}>
                      🔊
                    </button>
                  </div>

                  <p className="translation-text">{value}</p>

                  {code === 'zh' && currentPhrase.chinesePinyin && (
                    <small className="phonetic">Pinyin: {currentPhrase.chinesePinyin}</small>
                  )}
                  {code === 'ja' && currentPhrase.japaneseRomaji && (
                    <small className="phonetic">Romaji: {currentPhrase.japaneseRomaji}</small>
                  )}
                </article>
              ))}
            </div>

            <div className="phrase-actions">
              <button className="secondary-btn" onClick={() => speakText('es', currentPhrase.spanish)}>
                🔁 Repetir español
              </button>
              <button className="ghost-btn" onClick={markAsLearned}>
                ✅ Marcar aprendida
              </button>
            </div>
          </div>
        </section>

        <aside className="panel side-panel">
          <div className="panel-header compact">
            <div>
              <p className="eyebrow">Progreso</p>
              <h2>Tu camino</h2>
            </div>
          </div>

          <div className="progress-wrap">
            <div className="progress-labels">
              <span>Avance</span>
              <strong>{Math.round(completionPercent)}%</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${completionPercent}%` }} />
            </div>
          </div>

          <div className="mini-grid">
            <div className="stat-box">
              <span>Frases</span>
              <strong>{totalCompleted}</strong>
            </div>
            <div className="stat-box">
              <span>Lecciones</span>
              <strong>{categories.length}</strong>
            </div>
            <div className="stat-box">
              <span>Modo</span>
              <strong>Act.</strong>
            </div>
          </div>

          <div className="daily-card">
            <p className="eyebrow">Reto diario</p>
            <h3>{dailyPhrase.spanish}</h3>
            <p>{dailyPhrase.english}</p>
            <button
              className="secondary-btn"
              onClick={() => {
                setDailyIndex((prev) => prev + 1);
                speakText('es', dailyPhrase.spanish);
              }}
            >
              Siguiente reto
            </button>
          </div>

          <div className="achievement-panel">
            <p className="eyebrow">Logros</p>
            <ul>
              <li>🏆 Primeros 100 XP</li>
              <li>🔥 Racha de 3 días</li>
              <li>🌟 10 frases aprendidas</li>
            </ul>
          </div>
        </aside>
      </main>

      <section className="bottom-grid">
        <div className="panel quiz-panel">
          <div className="panel-header compact">
            <div>
              <p className="eyebrow">Quiz</p>
              <h2>¿Cuál es la traducción correcta?</h2>
            </div>
          </div>

          <div className="quiz-box">
            <p className="quiz-question">Selecciona la traducción en inglés de: “{currentPhrase.spanish}”</p>
            <div className="quiz-options">
              {quizOptions.map((option) => (
                <button key={option} className="quiz-btn" onClick={() => answerQuiz(option)}>
                  {option}
                </button>
              ))}
            </div>
            {quizResult && <p className="quiz-result">{quizResult}</p>}
          </div>
        </div>

        <div className="panel vocab-panel">
          <div className="panel-header compact">
            <div>
              <p className="eyebrow">Vocabulario</p>
              <h2>Palabras útiles</h2>
            </div>
          </div>

          <div className="vocab-list">
            {vocabulary.map((item) => (
              <div className="vocab-item" key={item.es}>
                <div>
                  <strong>{item.es}</strong>
                  <span>{item.en}</span>
                </div>
                <div>
                  <small>{item.zh}</small>
                  <small>{item.ja}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel lessons-panel">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Lecciones</p>
            <h2>Ruta de aprendizaje</h2>
          </div>
        </div>

        <div className="lessons-grid">
          {lessonCards.map((lesson) => (
            <div key={lesson.title} className="lesson-card">
              <span className="lesson-tag">{lesson.tag}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <ul>
                {lesson.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
