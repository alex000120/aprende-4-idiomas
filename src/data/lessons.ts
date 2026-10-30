import { useEffect, useMemo, useState } from 'react';
import { categories, lessonCards, phrases, vocabulary } from './data/lessons';

type LanguageCode = 'es' | 'en' | 'zh' | 'ja';

type ProgressMap = Record<string, number>;

const STORAGE_KEY = 'linguamix-progress';

const languageMeta: Record<LanguageCode, { label: string; accent: string; flag: string }> = {
  es: { label: 'Español', accent: 'es-ES', flag: '🇪🇸' },
  en: { label: 'English', accent: 'en-US', flag: '🇺🇸' },
  zh: { label: '中文', accent: 'zh-CN', flag: '🇨🇳' },
  ja: { label: '日本語', accent: 'ja-JP', flag: '🇯🇵' }
};

const getInitialProgress = (): ProgressMap => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved) as ProgressMap;
  } catch {
    return {};
  }
};

const speakText = (language: LanguageCode, text: string) => {
  if (!('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageMeta[language].accent;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState<ProgressMap>(getInitialProgress);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [dailyIndex, setDailyIndex] = useState(0);

  const filteredPhrases = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return phrases;
    }

    return phrases.filter((phrase) => phrase.category === selectedCategory);
  }, [selectedCategory]);

  const currentPhrase = filteredPhrases[currentIndex % Math.max(filteredPhrases.length, 1)] ?? phrases[0];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handleProgress = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1
    }));
  };

  const nextPhrase = () => {
    if (filteredPhrases.length === 0) {
      return;
    }

    setCurrentIndex((prev) => (prev + 1) % filteredPhrases.length);
    handleProgress(currentPhrase.id);
  };

  const dailyPhrase = phrases[dailyIndex % phrases.length];

  const quizOptions = useMemo(() => {
    const correct = currentPhrase.english;
    const wrongs = phrases
      .filter((phrase) => phrase.id !== currentPhrase.id)
      .map((phrase) => phrase.english)
      .slice(0, 3);

    const options = [...wrongs, correct];
    return [...options].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [currentPhrase]);

  const answerQuiz = (option: string) => {
    if (option === currentPhrase.english) {
      setQuizResult('¡Correcto! Esa traducción es exacta.');
      handleProgress(`${currentPhrase.id}-quiz`);
      return;
    }

    setQuizResult('No es esa. Intenta escuchar otra vez la frase y elige con calma.');
  };

  const totalSeen = Object.values(progress).reduce((sum, value) => sum + value, 0);
  const progressPercent = Math.min((totalSeen / Math.max(phrases.length * 4, 1)) * 100, 100);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Aprendizaje creativo</p>
          <h1>LinguaMix 4 Idiomas</h1>
        </div>
        <div className="topbar-badges">
          {Object.entries(languageMeta).map(([code, meta]) => (
            <span key={code} className="badge">
              {meta.flag} {meta.label}
            </span>
          ))}
        </div>
      </header>

      <main className="main-grid">
        <section className="panel spotlight-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Frase del día</p>
              <h2>Aprender con 4 traducciones a la vez</h2>
            </div>
            <button className="primary-btn" onClick={nextPhrase}>
              Siguiente frase
            </button>
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

          <div className="phrase-card">
            <div className="phrase-header">
              <span className="tag">{currentPhrase.category}</span>
              <span className="level">Nivel {currentPhrase.level}</span>
            </div>

            <h3 className="phrase-base">{currentPhrase.spanish}</h3>
            <p className="phrase-tip">{currentPhrase.tip}</p>

            <div className="translation-grid">
              {(['es', 'en', 'zh', 'ja'] as LanguageCode[]).map((code) => (
                <article key={code} className="translation-box">
                  <div className="translation-top">
                    <span className="language-name">
                      {languageMeta[code].flag} {languageMeta[code].label}
                    </span>
                    <button className="listen-btn" onClick={() => speakText(code, currentPhrase[code])}>
                      🔊
                    </button>
                  </div>

                  <p className="translation-text">
                    {code === 'es' && currentPhrase.spanish}
                    {code === 'en' && currentPhrase.english}
                    {code === 'zh' && currentPhrase.chinese}
                    {code === 'ja' && currentPhrase.japanese}
                  </p>

                  {code === 'zh' && currentPhrase.chinesePinyin && (
                    <small className="phonetic">Pinyin: {currentPhrase.chinesePinyin}</small>
                  )}
                  {code === 'ja' && currentPhrase.japaneseRomaji && (
                    <small className="phonetic">Romaji: {currentPhrase.japaneseRomaji}</small>
                  )}
                </article>
              ))}
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
              <strong>{Math.round(progressPercent)}%</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <div className="mini-grid">
            <div className="stat-box">
              <span>Frases vistas</span>
              <strong>{totalSeen}</strong>
            </div>
            <div className="stat-box">
              <span>Lecciones</span>
              <strong>{categories.length}</strong>
            </div>
            <div className="stat-box">
              <span>Pronunciación</span>
              <strong>Activa</strong>
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
