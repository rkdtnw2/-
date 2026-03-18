@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

:root {
  --primary: #e6007e;
  --primary-dark: #b80064;
  --primary-soft: #fff1f8;
  --primary-soft-2: #fde7f3;
  --bg: #f6f7fb;
  --white: #ffffff;
  --text: #232b3a;
  --subtext: #667085;
  --line: #e7e9f0;
  --soft-line: #eff1f6;
  --shadow-sm: 0 8px 24px rgba(17, 24, 39, 0.05);
  --shadow-md: 0 18px 48px rgba(17, 24, 39, 0.08);
  --shadow-lg: 0 26px 70px rgba(230, 0, 126, 0.10);
  --radius-xl: 30px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --topbar-height: 82px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

button {
  border: 0;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.page-main {
  padding-top: var(--topbar-height);
}

/* 상단바 */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--topbar-height);
  z-index: 1000;
  background: rgba(243, 241, 244, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid #dddce2;
  box-shadow: 0 4px 20px rgba(20, 30, 50, 0.04);
}

.topbar-inner {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  min-height: var(--topbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-logo-box {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #d9d9de, #bdbec7);
  color: #1f2937;
  font-weight: 900;
  font-size: 20px;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.7);
}

.brand-text {
  font-size: 21px;
  font-weight: 800;
  color: #2a3140;
  letter-spacing: -0.03em;
}

.topnav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.topnav a {
  position: relative;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  color: #2f3747;
  transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease;
}

.topnav a:hover {
  background: rgba(255, 255, 255, 0.72);
  transform: translateY(-1px);
}

.topnav a.active {
  color: #111827;
}

/* 공통 애니메이션 */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 {
  animation-delay: 0.12s;
}

.delay-2 {
  animation-delay: 0.24s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.floating-card {
  animation: floatY 5.5s ease-in-out infinite;
}

.delay-float {
  animation-delay: 1.2s;
}

@keyframes floatY {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

/* 히어로 */
.hero-section {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #f4f1f5 0%, #f7f7fb 52%, #f6f7fb 100%);
  border-bottom: 1px solid var(--soft-line);
  padding: 56px 0 40px;
}

.hero-bg-shape {
  position: absolute;
  border-radius: 999px;
  filter: blur(12px);
  pointer-events: none;
}

.hero-bg-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(230,0,126,0.09) 0%, rgba(230,0,126,0) 72%);
  top: -120px;
  right: -40px;
}

.hero-bg-2 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(114,87,255,0.08) 0%, rgba(114,87,255,0) 72%);
  bottom: -100px;
  left: -60px;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: stretch;
}

.hero-text {
  padding: 46px 44px;
  background:
    linear-gradient(145deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78));
  border: 1px solid rgba(255,255,255,0.72);
  border-radius: 34px;
  box-shadow: var(--shadow-md);
}

.hero-label {
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.hero-text h1 {
  margin: 0 0 16px;
  font-size: clamp(34px, 4.4vw, 58px);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.hero-text p {
  margin: 0;
  color: var(--subtext);
  line-height: 1.85;
  font-size: 16px;
  max-width: 620px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-visual {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}

.hero-glass-card {
  padding: 30px;
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(255,255,255,0.88), rgba(255,255,255,0.68));
  border: 1px solid rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-lg);
}

.hero-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.hero-card-badge {
  display: inline-block;
  padding: 8px 12px;
  background: #eef4ff;
  color: #4156a6;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
}

.hero-card-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 8px rgba(230,0,126,0.08);
}

.hero-glass-card h3 {
  margin: 0 0 12px;
  font-size: 30px;
  line-height: 1.25;
  letter-spacing: -0.03em;
}

.hero-glass-card p {
  margin: 0;
  color: var(--subtext);
  line-height: 1.8;
}

.hero-mini-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.hero-mini-item {
  padding: 14px 12px;
  border-radius: 18px;
  background: rgba(255,255,255,0.78);
  border: 1px solid var(--line);
}

.hero-mini-item strong {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
}

.hero-mini-item span {
  font-size: 13px;
  color: var(--subtext);
}

.hero-side-card {
  width: 72%;
  margin-left: auto;
  padding: 22px 22px 20px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow-sm);
}

.hero-side-title {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 12px;
}

.hero-side-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--subtext);
  line-height: 1.9;
}

/* 공통 섹션 머리 */
.section-head {
  margin-bottom: 18px;
}

.section-head h2 {
  margin: 0 0 8px;
  font-size: 30px;
  letter-spacing: -0.03em;
}

.section-head p {
  margin: 0;
  color: var(--subtext);
  line-height: 1.7;
}

/* 메뉴 */
.menu-section {
  padding: 36px 0 28px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.menu-card {
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, #ffffff 0%, #fcfcff 100%);
  border-radius: 28px;
  padding: 28px;
  text-align: left;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.menu-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(20, 30, 50, 0.08);
  border-color: #f1cde1;
}

.menu-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 28px;
  margin-bottom: 18px;
  background: linear-gradient(135deg, #faf0f6, #f7f7ff);
}

.menu-card h3 {
  margin: 0 0 10px;
  font-size: 24px;
  letter-spacing: -0.02em;
}

.menu-card p {
  margin: 0 0 18px;
  color: var(--subtext);
  line-height: 1.7;
}

.menu-link {
  display: inline-block;
  color: var(--primary-dark);
  font-weight: 800;
  font-size: 14px;
}

/* 공통 박스 */
.content-section,
.panel {
  background: linear-gradient(180deg, #ffffff 0%, #fcfcff 100%);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: var(--shadow-sm);
}

.content-section {
  margin-bottom: 32px;
  padding: 28px;
}

.hidden {
  display: none;
}

.section-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
}

.section-top h3,
.panel h3 {
  margin: 0 0 6px;
  font-size: 26px;
  letter-spacing: -0.02em;
}

.section-sub {
  margin: 0;
  color: var(--subtext);
  line-height: 1.6;
}

.badge {
  white-space: nowrap;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-dark);
  font-weight: 800;
  font-size: 14px;
}

/* 버튼 */
.primary-btn,
.ghost-btn {
  border-radius: 14px;
  padding: 13px 18px;
  cursor: pointer;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 10px 22px rgba(230, 0, 126, 0.18);
}

.primary-btn:hover {
  transform: translateY(-2px);
}

.ghost-btn {
  background: #fff;
  border: 1px solid var(--line);
  color: var(--text);
}

.ghost-btn:hover {
  background: #fafafa;
}

/* 상품자료 */
.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.edu-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 10px 24px rgba(20, 30, 50, 0.04);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.edu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(20, 30, 50, 0.07);
}

.edu-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: #f2f4f8;
}

.edu-body {
  padding: 18px;
}

.edu-category {
  display: inline-block;
  margin-bottom: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f4f1ff;
  color: #6151aa;
  font-size: 12px;
  font-weight: 800;
}

.edu-title {
  margin: 0 0 8px;
  font-size: 20px;
}

.edu-desc {
  margin: 0;
  color: var(--subtext);
  line-height: 1.7;
  font-size: 14px;
}

/* 테스트 */
.test-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.test-list {
  display: grid;
  gap: 18px;
}

.question {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.question:hover {
  box-shadow: 0 12px 26px rgba(20, 30, 50, 0.05);
}

.question h4 {
  margin: 0 0 14px;
  font-size: 18px;
  line-height: 1.6;
}

.question label {
  display: block;
  margin: 10px 0;
  color: var(--subtext);
  line-height: 1.65;
}

.test-result {
  margin-top: 20px;
  padding: 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
  border: 1px solid var(--line);
}

/* SOP */
.subhero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f4f1f5 0%, #f7f7fb 100%);
  padding: 40px 0 28px;
  border-bottom: 1px solid var(--soft-line);
}

.subhero-bg-shape {
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.subhero-bg-1 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(230,0,126,0.08) 0%, rgba(230,0,126,0) 72%);
  top: -100px;
  right: -40px;
}

.subhero-bg-2 {
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(97,81,170,0.08) 0%, rgba(97,81,170,0) 72%);
  bottom: -90px;
  left: -40px;
}

.subhero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.subhero h1 {
  margin: 0 0 10px;
  font-size: clamp(30px, 4vw, 44px);
  letter-spacing: -0.04em;
}

.subhero p {
  margin: 0;
  color: var(--subtext);
  line-height: 1.7;
}

.search-wrap {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.search-wrap input {
  flex: 1;
  min-width: 220px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: #fff;
  outline: none;
}

.search-info {
  color: var(--subtext);
  font-size: 14px;
  min-height: 20px;
}

.sop-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
  padding: 28px 0 40px;
}

.panel {
  padding: 22px;
}

.sop-main {
  display: grid;
  gap: 20px;
}

.chapter-list,
.topic-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chapter-btn,
.topic-btn {
  width: 100%;
  text-align: left;
  border: 1px solid var(--line);
  background: #fff;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.chapter-btn:hover,
.topic-btn:hover {
  transform: translateY(-1px);
}

.chapter-btn:hover,
.topic-btn:hover,
.chapter-btn.active,
.topic-btn.active {
  background: var(--primary-soft);
  border-color: #f2c8de;
  color: var(--primary-dark);
}

.slide-panel {
  min-height: 500px;
}

.slide-head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
  margin-bottom: 18px;
}

.slide-card {
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  background: #fff;
}

.slide-image {
  width: 100%;
  border-radius: 18px;
  margin-top: 14px;
  object-fit: cover;
  max-height: 460px;
  background: #f3f5f9;
}

.slide-text {
  color: var(--text);
  line-height: 1.85;
  white-space: pre-wrap;
}

.empty-state {
  padding: 36px 18px;
  text-align: center;
  color: var(--subtext);
  border: 1px dashed var(--line);
  border-radius: 18px;
  background: #fbfbfd;
}

/* 반응형 */
@media (max-width: 1024px) {
  .hero-content,
  .sop-layout {
    grid-template-columns: 1fr;
  }

  .menu-grid,
  .edu-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-side-card {
    width: 100%;
  }
}

@media (max-width: 760px) {
  :root {
    --topbar-height: 118px;
  }

  .topbar-inner {
    min-height: auto;
    padding: 14px 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }

  .topnav {
    flex-wrap: wrap;
    gap: 8px;
  }

  .menu-grid,
  .edu-grid,
  .hero-mini-grid {
    grid-template-columns: 1fr;
  }

  .hero-text,
  .hero-glass-card,
  .hero-side-card,
  .content-section,
  .panel {
    padding: 20px;
  }

  .section-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand-text {
    font-size: 19px;
  }

  .hero-text h1 {
    font-size: 34px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
