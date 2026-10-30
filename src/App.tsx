:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #f7f8ff;
  background: linear-gradient(135deg, #0f172a, #1d4ed8 35%, #111827 100%);
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
    radial-gradient(circle at top, rgba(126, 34, 206, 0.45), transparent 20%),
    linear-gradient(135deg, #0f172a, #111827 38%, #0b1021 100%);
}

button {
  font: inherit;
}

#root {
  min-height: 100vh;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: #a5b4fc;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
}

.topbar-badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.badge {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.8rem;
}

.main-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.8fr);
  gap: 24px;
  margin-bottom: 24px;
}

.bottom-grid {
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
}

.panel {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
  padding: 22px;
  backdrop-filter: blur(14px);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.panel-header.compact {
  margin-bottom: 14px;
}

.primary-btn,
.secondary-btn,
.listen-btn,
.chip,
.quiz-btn {
  border: none;
  cursor: pointer;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.primary-btn,
.secondary-btn {
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, #22c55e, #14b8a6);
  color: #04130d;
}

.secondary-btn {
  background: rgba(59, 130, 246, 0.18);
  color: #dfeafe;
  border: 1px solid rgba(147, 197, 253, 0.35);
}

.primary-btn:hover,
.secondary-btn:hover,
.listen-btn:hover,
.chip:hover,
.quiz-btn:hover {
  transform: translateY(-1px);
}

.category-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.chip {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
}

.chip.active {
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  color: white;
}

.phrase-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.13), rgba(14, 165, 233, 0.08));
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 20px;
  padding: 22px;
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
  font-size: 0.75rem;
  padding: 6px 10px;
}

.tag {
  background: rgba(45, 212, 191, 0.14);
  border: 1px solid rgba(45, 212, 191, 0.3);
  color: #afffe8;
}

.level {
  background: rgba(244, 114, 182, 0.14);
  border: 1px solid rgba(244, 114, 182, 0.3);
  color: #ffd2ef;
}

.phrase-base {
  margin: 0 0 8px;
  font-size: clamp(1.75rem, 3vw, 2.7rem);
  line-height: 1.2;
}

.phrase-tip {
  color: #cbd5e1;
  margin-bottom: 18px;
}

.translation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.translation-box {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 18px;
  padding: 16px;
}

.translation-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.language-name {
  font-weight: 700;
  color: #f8fbff;
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
  font-size: 1.1rem;
  color: #f8fafc;
}

.phonetic {
  color: #93c5fd;
}

.progress-wrap {
  margin-top: 6px;
  margin-bottom: 18px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #e2e8f0;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(148, 163, 184, 0.18);
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
  color: #cbd5e1;
  font-size: 0.72rem;
  margin-bottom: 4px;
}

.stat-box strong {
  font-size: 1.2rem;
}

.daily-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(59, 130, 246, 0.08));
  border-radius: 20px;
  padding: 18px;
  border: 1px solid rgba(147, 197, 253, 0.2);
}

.daily-card h3 {
  margin-bottom: 6px;
}

.quiz-box {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  padding: 20px;
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
  color: #e0f2fe;
  padding: 14px 12px;
  border: 1px solid rgba(96, 165, 250, 0.2);
}

.quiz-result {
  margin-top: 16px;
  color: #a7f3d0;
  font-weight: 600;
}

.vocab-list {
  display: grid;
  gap: 12px;
}

.vocab-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 14px;
  padding: 12px 14px;
}

.vocab-item strong,
.vocab-item span,
.vocab-item small {
  display: block;
}

.vocab-item strong {
  margin-bottom: 3px;
}

.vocab-item small {
  color: #cbd5e1;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 10px;
}

.lesson-card {
  background: rgba(15, 23, 42, 0.62);
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 18px;
  padding: 18px;
}

.lesson-tag {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.25);
  color: #e9d5ff;
  padding: 6px 10px;
  font-size: 0.72rem;
}

.lesson-card h3 {
  margin: 14px 0 8px;
}

.lesson-card p {
  color: #cbd5e1;
}

.lesson-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: #e2e8f0;
}

.lesson-card li + li {
  margin-top: 6px;
}

@media (max-width: 980px) {
  .main-grid,
  .bottom-grid,
  .lessons-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 620px) {
  .translation-grid,
  .quiz-options,
  .mini-grid {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 18px;
  }

  .phrase-base {
    font-size: 1.6rem;
  }
}
