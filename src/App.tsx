:root {
  color-scheme: dark;
  font-family: Inter, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #f7fbff;
  background: #07111f;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 18%),
    radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.2), transparent 26%),
    linear-gradient(135deg, #07111f 0%, #0b1324 40%, #111827 100%);
}

button {
  font: inherit;
}

button,
input,
textarea,
select {
  font: inherit;
}

#root {
  min-height: 100vh;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 28px 18px 60px;
}

.topbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: #b9d3ff;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin: 0;
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  line-height: 1.1;
}

.subtitle {
  margin-top: 8px;
  color: #dfe7ff;
  opacity: 0.9;
}

.topbar-badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(148, 163, 184, 0.18);
  color: #edf3ff;
  font-weight: 600;
  box-shadow: 0 12px 18px rgba(7, 17, 31, 0.18);
}

.badge.pulse {
  background: linear-gradient(135deg, rgba(45, 212, 191, 0.18), rgba(96, 165, 250, 0.16));
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.metric-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 18px;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  background: rgba(15, 23, 42, 0.72);
  box-shadow: 0 20px 28px rgba(15, 23, 42, 0.2);
}

.metric-card span,
.metric-card small {
  color: #dfe7ff;
}

.metric-card strong {
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1;
}

.glow-cyan {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(14, 165, 233, 0.06));
}

.glow-violet {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(99, 102, 241, 0.08));
}

.glow-green {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.14), rgba(20, 184, 166, 0.08));
}

.glow-gold {
  background: linear-gradient(135deg, rgba(250, 204, 21, 0.16), rgba(251, 146, 60, 0.1));
}

.mode-switcher {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tab {
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(15, 23, 42, 0.5);
  color: #edf6ff;
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.18s ease;
}

.tab.active {
  background: linear-gradient(135deg, #8b5cf6, #60a5fa);
  border-color: rgba(191, 219, 254, 0.3);
}

.main-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.8fr);
  gap: 22px;
  margin-bottom: 22px;
}

.bottom-grid {
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
}

.panel {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 26px;
  padding: 22px;
  box-shadow: 0 18px 32px rgba(2, 6, 23, 0.24);
  backdrop-filter: blur(12px);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
}

.panel-header.compact {
  margin-bottom: 12px;
}

.header-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.primary-btn,
.secondary-btn,
.ghost-btn,
.listen-btn,
.chip,
.focus-pill,
.quiz-btn,
.mini-translation {
  border: none;
  cursor: pointer;
  transition: transform 0.18s ease, filter 0.18s ease;
}

.primary-btn,
.secondary-btn,
.ghost-btn {
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, #22c55e, #14b8a6);
  color: #02170d;
}

.secondary-btn {
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.28);
  color: #ebf4ff;
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e0f2fe;
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover,
.listen-btn:hover,
.chip:hover,
.focus-pill:hover,
.quiz-btn:hover,
.mini-translation:hover,
.tab:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.category-row,
.focus-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.chip,
.focus-pill {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #edf6ff;
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.chip.active,
.focus-pill.active {
  background: linear-gradient(135deg, #8b5cf6, #60a5fa);
  border-color: rgba(191, 219, 254, 0.4);
}

.phrase-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(14, 165, 233, 0.08));
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 22px;
  padding: 18px;
}

.phrase-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.tag,
.level {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.72rem;
  padding: 6px 10px;
}

.tag {
  background: rgba(45, 212, 191, 0.12);
  border: 1px solid rgba(45, 212, 191, 0.25);
  color: #afffe8;
}

.level {
  background: rgba(244, 114, 182, 0.12);
  border: 1px solid rgba(244, 114, 182, 0.26);
  color: #ffd8f2;
}

.phrase-base {
  margin: 0 0 8px;
  font-size: clamp(1.75rem, 3vw, 2.8rem);
  line-height: 1.2;
}

.phrase-tip {
  color: #d6e3ff;
  margin-bottom: 16px;
}

.translation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.translation-box {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 18px;
  padding: 16px;
  min-height: 160px;
}

.translation-box.active {
  border-color: rgba(125, 211, 252, 0.7);
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.25);
}

.translation-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}

.language-name {
  font-weight: 700;
  color: #f3f9ff;
}

.listen-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.2);
  color: #dbeafe;
}

.translation-text {
  margin: 0 0 8px;
  color: #f9fbff;
  font-size: 1.12rem;
}

.phonetic {
  color: #bfe0ff;
}

.phrase-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.progress-wrap {
  margin-bottom: 18px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #eff6ff;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(148, 163, 184, 0.12);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #22c55e, #14b8a6, #60a5fa);
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.stat-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 14px 12px;
  text-align: center;
}

.stat-box span {
  display: block;
  color: #dbe7ff;
  font-size: 0.7rem;
  margin-bottom: 6px;
}

.stat-box strong {
  font-size: 1.4rem;
}

.daily-card,
.achievement-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(59, 130, 246, 0.08));
  border-radius: 18px;
  border: 1px solid rgba(147, 197, 253, 0.18);
  padding: 18px;
}

.daily-card {
  margin-bottom: 16px;
}

.daily-card h3 {
  margin-bottom: 6px;
}

.achievement-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
  color: #e7f2ff;
}

.flashcard-panel {
  margin-top: 10px;
}

.flashcard-shell {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 18px;
  min-height: 280px;
  align-items: stretch;
}

.flashcard-face,
.flashcard-back {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.72), rgba(82, 86, 196, 0.12));
  border-radius: 22px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  padding: 22px;
}

.flashcard-face h3 {
  font-size: clamp(2rem, 5vw, 3.1rem);
  margin: 16px 0 10px;
}

.flashcard-face p {
  color: #dbeafe;
}

.mini-translation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.mini-translation {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
  color: #eff6ff;
  padding: 12px 14px;
  border-radius: 12px;
  text-align: left;
}

.quiz-box {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  padding: 18px;
}

.quiz-question {
  font-size: 1.08rem;
  margin-bottom: 18px;
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.quiz-btn {
  border-radius: 14px;
  background: rgba(59, 130, 246, 0.12);
  color: #edf7ff;
  padding: 14px 12px;
  border: 1px solid rgba(96, 165, 250, 0.2);
}

.quiz-result {
  margin-top: 16px;
  font-weight: 700;
  color: #a7f3d0;
}

.vocab-panel.full-width {
  width: 100%;
}

.vocab-list {
  display: grid;
  gap: 12px;
}

.vocab-item {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.vocab-item strong,
.vocab-item span,
.vocab-item small {
  display: block;
}

.vocab-item strong {
  margin-bottom: 5px;
}

.vocab-item small {
  color: #d6e3ff;
}

.vocab-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.vocab-card {
  background: rgba(15, 23, 42, 0.66);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  padding: 16px;
}

.vocab-card h3 {
  margin-bottom: 6px;
}

.vocab-card p {
  color: #dfe8ff;
}

.vocab-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0;
}

.vocab-tags span {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.18);
  color: #dbeafe;
  font-size: 0.74rem;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.lesson-card {
  background: rgba(15, 23, 42, 0.62);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 18px;
  padding: 18px;
}

.lesson-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.26);
  color: #e9d5ff;
  font-size: 0.72rem;
}

.lesson-card h3 {
  margin: 14px 0 8px;
}

.lesson-card p {
  color: #d5e6fb;
}

.lesson-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #edf5ff;
}

.lesson-card li + li {
  margin-top: 6px;
}

@media (max-width: 980px) {
  .hero-metrics,
  .main-grid,
  .bottom-grid,
  .lessons-grid,
  .vocab-grid,
  .flashcard-shell {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar-badges {
    justify-content: flex-start;
  }
}

@media (max-width: 620px) {
  .app-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .panel {
    padding: 16px;
  }

  .panel-header,
  .header-actions,
  .phrase-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .translation-grid,
  .quiz-options,
  .mini-grid {
    grid-template-columns: 1fr;
  }

  .phrase-base {
    font-size: 1.55rem;
  }

  .header-actions button,
  .phrase-actions button,
  .primary-btn,
  .secondary-btn,
  .ghost-btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }
}

@media (hover: hover) and (pointer: fine) {
  .badge,
  .chip,
  .focus-pill,
  .quiz-btn,
  .translation-box,
  .tab,
  .mini-translation {
    transition: transform 0.18s ease, border-color 0.18s ease;
  }
}












































































































































































































































n

















































































































































































n










































































































n










































n











































































































































n















































































n






































n













































n






































n













































n
";





























































































n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



";

























































































n














n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



";































































































n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a






















n



n



n



n



n



n



n



n



n



n



n



n



n



n



a













n



n



n



n



n



n



n


a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



a













n



n



n



n



n



n



n



n



a












n



n



a

























n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n
n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a













n



n



n



n



n



n



n



n



a












n



n



n



n



n



n



n



a












n



n



a












n



n



n



n



n



n



a












a












n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a












a












n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a












n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a

























n



n



n



n



n



n



n



a












n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



n



a












n



n



n



n



n



a"; 
