<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sandro Carlos Silva — UltraWork AI</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #fafaf8;
  --bg2: #f3f3f0;
  --ink: #0e0e0c;
  --ink2: #2c2c28;
  --muted: #8a8a82;
  --muted2: #b8b8b0;
  --accent: #0e0e0c;
  --green: #1a6644;
  --green-light: #e8f2ec;
  --border: rgba(14,14,12,0.1);
  --border2: rgba(14,14,12,0.06);
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'DM Sans', system-ui, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-sans);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 6vw;
  background: rgba(250,250,248,0.88);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid var(--border2);
  transition: padding 0.3s;
}

.nav-brand {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  color: var(--ink);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--ink); }

.nav-cta {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink) !important;
  border-bottom: 1px solid var(--ink);
  text-decoration: none !important;
  padding-bottom: 1px;
  transition: opacity 0.2s;
}
.nav-cta:hover { opacity: 0.5 !important; }

/* ── HERO ── */
#hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 6vw 7vh;
  position: relative;
  overflow: hidden;
}

.hero-bg-word {
  position: absolute;
  top: 50%;
  right: -2vw;
  transform: translateY(-54%);
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(18vw, 22vw, 28vw);
  color: transparent;
  -webkit-text-stroke: 1px rgba(14,14,12,0.055);
  letter-spacing: -0.04em;
  user-select: none;
  pointer-events: none;
  line-height: 1;
  white-space: nowrap;
}

.hero-eyebrow {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
  opacity: 0;
  animation: rise 1s 0.1s cubic-bezier(0.16,1,0.3,1) forwards;
}

.hero-title {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(3.2rem, 7.5vw, 9rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: var(--ink);
  max-width: 14ch;
  opacity: 0;
  animation: rise 1s 0.25s cubic-bezier(0.16,1,0.3,1) forwards;
}

.hero-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--green);
}

.hero-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border2);
  gap: 3rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: rise 1s 0.45s cubic-bezier(0.16,1,0.3,1) forwards;
}

.hero-desc {
  font-size: 1rem;
  font-weight: 300;
  color: var(--muted);
  max-width: 38ch;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.85rem 1.8rem;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}

.btn-dark {
  background: var(--ink);
  color: var(--bg);
}
.btn-dark:hover { background: var(--ink2); }

.btn-outline {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--border);
}
.btn-outline:hover { background: var(--bg2); }

.hero-stats {
  display: flex;
  gap: 4rem;
  opacity: 0;
  animation: rise 1s 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
  padding-top: 4rem;
}

.stat { }
.stat-n {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink);
}
.stat-n sub {
  font-size: 1.5rem;
  vertical-align: baseline;
  color: var(--green);
}
.stat-l {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 0.5rem;
}

/* ── MARQUEE ── */
.marquee-wrap {
  background: var(--ink);
  color: var(--bg);
  overflow: hidden;
  padding: 1.1rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.marquee-track {
  display: flex;
  gap: 0;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
}

.marquee-dot {
  width: 4px;
  height: 4px;
  background: var(--green);
  border-radius: 50%;
  flex-shrink: 0;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ── SECTIONS ── */
section { position: relative; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6vw;
}

.section-label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted2);
  margin-bottom: 1rem;
}

/* ── MANIFESTO ── */
#manifesto {
  padding: 10rem 0 8rem;
  background: var(--bg);
}

.manifesto-inner {
  max-width: 900px;
}

.manifesto-text {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2rem, 3.5vw, 3.6rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.manifesto-text em {
  font-style: italic;
  color: var(--green);
}

.manifesto-text .dim { color: var(--muted2); }

.manifesto-footnote {
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--muted);
  margin-top: 3rem;
  max-width: 44ch;
  line-height: 1.7;
}

/* ── SOBRE ── */
#sobre {
  padding: 8rem 0;
  background: var(--bg2);
  border-top: 1px solid var(--border2);
}

.sobre-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8vw;
  align-items: start;
}

.sobre-left { }

.sobre-h2 {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 2rem;
}

.sobre-p {
  font-size: 0.97rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.sobre-p strong {
  color: var(--ink);
  font-weight: 500;
}

.sobre-right { padding-top: 3rem; }

.competencia {
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--border2);
}

.competencia:first-child { border-top: 1px solid var(--border2); }

.comp-n {
  font-family: var(--font-serif);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted2);
  margin-bottom: 0.4rem;
}

.comp-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.3rem;
}

.comp-desc {
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--muted);
}

/* ── STACK ── */
.stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2.5rem;
}

.pill {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 0.3rem 0.75rem;
  transition: color 0.2s, border-color 0.2s;
}

.pill:hover { color: var(--ink); border-color: var(--ink2); }

/* ── PROJETOS ── */
#projetos {
  padding: 8rem 0;
  background: var(--bg);
  border-top: 1px solid var(--border2);
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.proj-h2 {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.proj-sub {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--muted);
  max-width: 36ch;
  line-height: 1.7;
  text-align: right;
}

/* featured project */
.proj-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2px;
  background: var(--bg2);
  transition: border-color 0.25s;
}

.proj-featured:hover { border-color: var(--border); }

.proj-feat-visual {
  background: var(--ink);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  position: relative;
  overflow: hidden;
}

.proj-feat-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(26,102,68,0.35) 0%, transparent 65%);
}

.proj-feat-content {
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.proj-badge {
  display: inline-block;
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--green);
  border: 1px solid rgba(26,102,68,0.3);
  border-radius: 2px;
  padding: 0.25rem 0.6rem;
  margin-bottom: 1.5rem;
  width: fit-content;
}

.proj-badge.done { color: var(--muted); border-color: var(--border); }

.proj-feat-name {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 1rem;
}

.proj-feat-desc {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.75;
  flex: 1;
  margin-bottom: 2rem;
}

.proj-highlight {
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--ink);
  padding: 0.9rem 1rem;
  border-left: 2px solid var(--green);
  background: var(--green-light);
  border-radius: 0 2px 2px 0;
  margin-bottom: 1.5rem;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* grid of smaller projects */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 2px;
}

.proj-card {
  background: var(--bg2);
  border: 1px solid var(--border2);
  border-radius: 2px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.25s, background 0.25s;
}

.proj-card:hover {
  border-color: var(--border);
  background: var(--bg);
}

.proj-icon {
  font-size: 1.8rem;
  line-height: 1;
}

.proj-name {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.2;
}

.proj-desc {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
}

.proj-result-sm {
  font-size: 0.8rem;
  color: var(--green);
  font-weight: 400;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border2);
}

/* ── IMPACTO ── */
#impacto {
  padding: 8rem 0;
  background: var(--ink);
  color: var(--bg);
  border-top: 1px solid rgba(255,255,255,0.06);
}

.impacto-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 5rem;
}

.impacto-item {
  background: var(--ink);
  padding: 3rem 2.5rem;
  text-align: center;
  transition: background 0.2s;
}

.impacto-item:hover { background: #161614; }

.impacto-n {
  font-family: var(--font-serif);
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #fafaf8;
}

.impacto-n span { color: #4ade9a; }

.impacto-l {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(250,250,248,0.38);
  margin-top: 0.75rem;
}

.impacto-copy {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2rem;
}

.impacto-copy .section-label { color: rgba(250,250,248,0.35); }

.impacto-h2 {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fafaf8;
}

.impacto-h2 em {
  font-style: italic;
  color: #4ade9a;
}

/* ── DIFERENCIAIS ── */
#diferenciais {
  padding: 8rem 0;
  background: var(--bg);
  border-top: 1px solid var(--border2);
}

.dif-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 8vw;
  align-items: start;
}

.dif-sticky {
  position: sticky;
  top: 6rem;
}

.dif-h2 {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 2rem;
}

.dif-h2 em { font-style: italic; color: var(--green); }

.dif-note {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.75;
}

.dif-list { display: flex; flex-direction: column; gap: 0; }

.dif-item {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border2);
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1.5rem;
  align-items: start;
  transition: padding-left 0.3s;
}

.dif-item:first-child { border-top: 1px solid var(--border2); }
.dif-item:hover { padding-left: 0.5rem; }

.dif-num {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--muted2);
  padding-top: 0.2rem;
}

.dif-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.4rem;
}

.dif-desc {
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.7;
}

/* ── VISÃO ── */
#visao {
  padding: 9rem 0;
  background: var(--bg2);
  border-top: 1px solid var(--border2);
  text-align: center;
}

.visao-inner { max-width: 780px; margin: 0 auto; }

.visao-quote {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(1.8rem, 3.5vw, 3.2rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 3rem;
}

.visao-quote em { font-style: italic; color: var(--green); }

.visao-sub {
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.8;
  max-width: 50ch;
  margin: 0 auto 3rem;
}

/* ── CTA ── */
#cta {
  padding: 10rem 0;
  background: var(--ink);
  text-align: center;
}

.cta-inner { max-width: 700px; margin: 0 auto; }

.cta-tag {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(250,250,248,0.35);
  margin-bottom: 2rem;
}

.cta-h2 {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fafaf8;
  margin-bottom: 1.5rem;
}

.cta-h2 em { font-style: italic; color: #4ade9a; }

.cta-sub {
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(250,250,248,0.45);
  line-height: 1.8;
  max-width: 44ch;
  margin: 0 auto 3.5rem;
}

.btn-white {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fafaf8;
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.1rem 2.5rem;
  border-radius: 2px;
  transition: opacity 0.2s;
}

.btn-white:hover { opacity: 0.85; }
.btn-white svg { width: 18px; height: 18px; }

/* ── FOOTER ── */
footer {
  background: var(--ink);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 2.5rem 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.foot-brand {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  color: rgba(250,250,248,0.4);
  text-decoration: none;
}

.foot-copy {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: rgba(250,250,248,0.2);
}

/* ── ANIMATIONS ── */
@keyframes rise {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}

.reveal.up { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .sobre-grid, .dif-grid { grid-template-columns: 1fr; gap: 3rem; }
  .proj-featured { grid-template-columns: 1fr; }
  .proj-feat-visual { min-height: 180px; }
  .proj-grid { grid-template-columns: 1fr; }
  .impacto-grid { grid-template-columns: 1fr 1fr; }
  .hero-stats { gap: 2.5rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; }
  .proj-sub { text-align: left; }
  footer { flex-direction: column; gap: 1rem; text-align: center; }
}

@media (max-width: 600px) {
  .impacto-grid { grid-template-columns: 1fr 1fr; }
  .hero-bg-word { font-size: 40vw; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-brand">UltraWork AI</a>
  <ul class="nav-links">
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#projetos">Projetos</a></li>
    <li><a href="#diferenciais">Visão</a></li>
    <li><a href="#cta" class="nav-cta">Conversar</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-bg-word">Futuro</div>
  <p class="hero-eyebrow">Sandro Carlos Silva — CEO · Belo Horizonte, MG</p>
  <h1 class="hero-title">
    Inteligência<br>
    que <em>transforma</em><br>
    negócios.
  </h1>
  <div class="hero-bottom">
    <p class="hero-desc">
      Sistemas de IA que operam enquanto você dorme — da estratégia ao código, do agente ao resultado.
    </p>
    <div class="hero-actions">
      <a href="#cta" class="btn btn-dark">
        Iniciar projeto
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="#projetos" class="btn btn-outline">Ver projetos</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat">
      <div class="stat-n">10<sub>+</sub></div>
      <div class="stat-l">Projetos com IA</div>
    </div>
    <div class="stat">
      <div class="stat-n">7<sub>+</sub></div>
      <div class="stat-l">Agentes construídos</div>
    </div>
    <div class="stat">
      <div class="stat-n">24<sub>/7</sub></div>
      <div class="stat-l">Operação autônoma</div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap" aria-hidden="true">
  <div class="marquee-track">
    <span class="marquee-item">Claude API <span class="marquee-dot"></span></span>
    <span class="marquee-item">N8N Automação <span class="marquee-dot"></span></span>
    <span class="marquee-item">Apps SaaS <span class="marquee-dot"></span></span>
    <span class="marquee-item">Agentes Autônomos <span class="marquee-dot"></span></span>
    <span class="marquee-item">Supabase <span class="marquee-dot"></span></span>
    <span class="marquee-item">WhatsApp API <span class="marquee-dot"></span></span>
    <span class="marquee-item">Lovable <span class="marquee-dot"></span></span>
    <span class="marquee-item">Sistemas Multi-Agente <span class="marquee-dot"></span></span>
    <span class="marquee-item">HeyGen <span class="marquee-dot"></span></span>
    <span class="marquee-item">Veo 3 <span class="marquee-dot"></span></span>
    <!-- duplicated for seamless loop -->
    <span class="marquee-item">Claude API <span class="marquee-dot"></span></span>
    <span class="marquee-item">N8N Automação <span class="marquee-dot"></span></span>
    <span class="marquee-item">Apps SaaS <span class="marquee-dot"></span></span>
    <span class="marquee-item">Agentes Autônomos <span class="marquee-dot"></span></span>
    <span class="marquee-item">Supabase <span class="marquee-dot"></span></span>
    <span class="marquee-item">WhatsApp API <span class="marquee-dot"></span></span>
    <span class="marquee-item">Lovable <span class="marquee-dot"></span></span>
    <span class="marquee-item">Sistemas Multi-Agente <span class="marquee-dot"></span></span>
    <span class="marquee-item">HeyGen <span class="marquee-dot"></span></span>
    <span class="marquee-item">Veo 3 <span class="marquee-dot"></span></span>
  </div>
</div>

<!-- MANIFESTO -->
<section id="manifesto">
  <div class="container">
    <div class="manifesto-inner reveal">
      <p class="section-label">Manifesto</p>
      <p class="manifesto-text">
        A maioria das empresas ainda opera como se fosse 2015.<br>
        <span class="dim">Processos manuais. Equipes sobrecarregadas.</span><br>
        Oportunidades que <em>escapam em silêncio.</em>
      </p>
      <p class="manifesto-footnote">
        A UltraWork AI existe para mudar isso. Construímos a infraestrutura inteligente que transforma operações lentas em máquinas de resultado — com agentes que pensam, vendem e entregam, sem intervenção humana constante.
      </p>
    </div>
  </div>
</section>

<!-- SOBRE -->
<section id="sobre">
  <div class="container">
    <div class="sobre-grid">
      <div class="sobre-left reveal">
        <p class="section-label">Fundador</p>
        <h2 class="sobre-h2">Sandro<br>Carlos Silva</h2>
        <p class="sobre-p">
          Empreendedor com obsessão por resultado. Fundei a <strong>UltraWork AI</strong> com uma missão clara: tornar o poder da Inteligência Artificial acessível para empresas brasileiras que querem crescer de forma inteligente e escalável.
        </p>
        <p class="sobre-p">
          Meu diferencial não é saber usar ferramentas de IA — é <strong>conectar tecnologia a negócio real</strong>. Cada sistema que construo nasce de um problema concreto e é medido por um resultado mensurável.
        </p>
        <p class="sobre-p">
          De agentes de vendas autônomos no WhatsApp a apps SaaS com múltiplas IAs especializadas, entrego sistemas que operam, vendem e escalam — enquanto o cliente foca no que realmente importa.
        </p>
        <div class="stack-row">
          <span class="pill">Claude API</span>
          <span class="pill">N8N</span>
          <span class="pill">Lovable</span>
          <span class="pill">Supabase</span>
          <span class="pill">React</span>
          <span class="pill">HeyGen</span>
          <span class="pill">Evolution API</span>
          <span class="pill">Veo 3</span>
          <span class="pill">Gemini</span>
          <span class="pill">Runway</span>
          <span class="pill">Kling</span>
          <span class="pill">Meta Ads</span>
        </div>
      </div>

      <div class="sobre-right reveal" style="transition-delay:0.15s">
        <p class="section-label">O que construo</p>
        <div class="competencia">
          <p class="comp-n">01</p>
          <p class="comp-title">Agentes de Vendas Autônomos</p>
          <p class="comp-desc">Sistemas multi-agente que qualificam leads, calculam propostas, gerenciam objeções e fecham contratos — via WhatsApp, 24 horas por dia.</p>
        </div>
        <div class="competencia">
          <p class="comp-n">02</p>
          <p class="comp-title">Apps SaaS com IA Integrada</p>
          <p class="comp-desc">Plataformas completas com React, TypeScript e Supabase — onde múltiplos agentes especializados trabalham em conjunto para o usuário final.</p>
        </div>
        <div class="competencia">
          <p class="comp-n">03</p>
          <p class="comp-title">Automação de Operações</p>
          <p class="comp-desc">Fluxos inteligentes com N8N que eliminam trabalho repetitivo, integram sistemas e garantem que nada se perca entre equipes e ferramentas.</p>
        </div>
        <div class="competencia">
          <p class="comp-n">04</p>
          <p class="comp-title">Conteúdo & Vídeo Gerado por IA</p>
          <p class="comp-desc">Estratégias de conteúdo e produção com HeyGen, Veo 3 e Runway — posts, vídeos e materiais que posicionam e vendem com consistência.</p>
        </div>
        <div class="competencia">
          <p class="comp-n">05</p>
          <p class="comp-title">Estratégia & Mentoria em IA</p>
          <p class="comp-desc">Para líderes e equipes que precisam entender como usar IA de forma prática, com foco em resultado e sem desperdício de tempo.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJETOS -->
<section id="projetos">
  <div class="container">
    <div class="projects-header reveal">
      <div>
        <p class="section-label">Projetos</p>
        <h2 class="proj-h2">Sistemas reais.<br>Resultados concretos.</h2>
      </div>
      <p class="proj-sub">Cada projeto é uma prova de que IA e resultado não são conceitos separados.</p>
    </div>

    <!-- FEATURED: OlympIA -->
    <div class="proj-featured reveal">
      <div class="proj-feat-visual">🏋️</div>
      <div class="proj-feat-content">
        <div>
          <span class="proj-badge">Em produção</span>
          <h3 class="proj-feat-name">OlympIA — App SaaS de Fitness com IA</h3>
          <p class="proj-feat-desc">
            Plataforma completa com 7 agentes especializados — Fisiologista, Personal Trainer, Nutricionista, Especialista em Suplementação, Recuperação e Coach Comportamental. Gera planos de treino personalizados com periodização de 4 semanas, escalonamento de volume e nutrição com preços brasileiros reais.
          </p>
          <div class="proj-highlight">
            Sistema multi-agente com orquestração autônoma — cada agente especializado contribui para o plano ideal do usuário.
          </div>
        </div>
        <div class="proj-tags">
          <span class="pill">Lovable</span>
          <span class="pill">React</span>
          <span class="pill">TypeScript</span>
          <span class="pill">Supabase</span>
          <span class="pill">Claude API</span>
          <span class="pill">Multi-agente</span>
        </div>
      </div>
    </div>

    <!-- FEATURED: SOLARIS -->
    <div class="proj-featured reveal" style="transition-delay:0.1s">
      <div class="proj-feat-visual" style="background:#0d1a0f;">☀️</div>
      <div class="proj-feat-content">
        <div>
          <span class="proj-badge">Entregue</span>
          <h3 class="proj-feat-name">SOLARIS SDR — Vendas Autônomas 24/7</h3>
          <p class="proj-feat-desc">
            Sistema autônomo de vendas via WhatsApp para o setor de energia solar. 7 agentes em cascata — qualificação de leads, cálculo de desconto na conta, gestão de objeções, follow-up automático e entrega ao CRM. Opera sem equipe comercial humana, sem folga e sem perda de lead.
          </p>
          <div class="proj-highlight">
            SDR virtual que substitui um vendedor inteiro — operando 24h por dia, 7 dias por semana, sem custo fixo de equipe.
          </div>
        </div>
        <div class="proj-tags">
          <span class="pill">N8N</span>
          <span class="pill">Evolution API</span>
          <span class="pill">Claude Sonnet</span>
          <span class="pill">Supabase</span>
          <span class="pill">WhatsApp</span>
        </div>
      </div>
    </div>

    <!-- GRID -->
    <div class="proj-grid">

      <div class="proj-card reveal">
        <div class="proj-icon">⚡</div>
        <span class="proj-badge">Ativo</span>
        <h3 class="proj-name">Super Agente de IA</h3>
        <p class="proj-desc">Skill customizada do Claude que atua como Arquiteto Supremo de Sistemas IA — eleva o perfil do usuário para nível elite antes de gerar arquiteturas, modelos de monetização e roadmaps.</p>
        <p class="proj-result-sm">Protocolo de Elevação automático integrado ao fluxo de trabalho.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">Claude API</span>
          <span class="pill">Prompt Engineering</span>
        </div>
      </div>

      <div class="proj-card reveal" style="transition-delay:0.08s">
        <div class="proj-icon">🤖</div>
        <span class="proj-badge">Ativo</span>
        <h3 class="proj-name">Agentes IA — UltraWork AI</h3>
        <p class="proj-desc">Série de agentes especializados para Instagram: Recrutador, Postador, Secretária Executiva, Orquestrador de Vendas e mais — com calendário de conteúdo e copy em português que converte.</p>
        <p class="proj-result-sm">Posicionamento de autoridade em IA com conteúdo que converte.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">HeyGen</span>
          <span class="pill">Claude API</span>
          <span class="pill">Instagram</span>
        </div>
      </div>

      <div class="proj-card reveal" style="transition-delay:0.16s">
        <div class="proj-icon">📈</div>
        <span class="proj-badge done">Entregue</span>
        <h3 class="proj-name">O Código do Day Trade</h3>
        <p class="proj-desc">Produto educacional completo sobre mercado financeiro — SMC, Elliott Wave, Fibonacci, gestão de risco e psicologia do trader. Dashboard interativo de análise técnica incluído.</p>
        <p class="proj-result-sm">Do conceito ao produto digital vendável em horas com IA generativa.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">IA Generativa</span>
          <span class="pill">Hotmart</span>
          <span class="pill">Trading</span>
        </div>
      </div>

      <div class="proj-card reveal" style="transition-delay:0.04s">
        <div class="proj-icon">📖</div>
        <span class="proj-badge done">Entregue</span>
        <h3 class="proj-name">Mapa Bíblico da Prosperidade</h3>
        <p class="proj-desc">Livro digital em 6 partes com programa de transformação financeira em 20 etapas. Gerado programaticamente com Node.js e formatação profissional — do conceito à entrega em horas.</p>
        <p class="proj-result-sm">Produto digital pronto para venda em plataformas como Hotmart.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">Node.js</span>
          <span class="pill">IA Generativa</span>
          <span class="pill">Hotmart</span>
        </div>
      </div>

      <div class="proj-card reveal" style="transition-delay:0.12s">
        <div class="proj-icon">🚀</div>
        <span class="proj-badge">Ativo</span>
        <h3 class="proj-name">Plano Estratégico UltraWork AI</h3>
        <p class="proj-desc">Sistema de monetização com IA: menu de serviços, tabela de preços por tier, meta de receita, plano de 7 dias e script de prospecção via WhatsApp para negócios em BH.</p>
        <p class="proj-result-sm">Estratégia orientada a clientes reais no mercado de BH.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">Estratégia</span>
          <span class="pill">WhatsApp</span>
          <span class="pill">BH</span>
        </div>
      </div>

      <div class="proj-card reveal" style="transition-delay:0.2s">
        <div class="proj-icon">💪</div>
        <span class="proj-badge done">Entregue</span>
        <h3 class="proj-name">Enciclopédia de Treino IA</h3>
        <p class="proj-desc">Base de dados interativa com 150+ exercícios, 500+ variações e 40+ técnicas avançadas. Programa PPL completo de hipertrofia gerado por IA e exportado como planilha Excel.</p>
        <p class="proj-result-sm">Widget interativo filtrável + documento completo para uso profissional.</p>
        <div class="proj-tags" style="margin-top:0.5rem">
          <span class="pill">Excel</span>
          <span class="pill">IA Generativa</span>
          <span class="pill">Fitness</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- IMPACTO -->
<section id="impacto">
  <div class="container">
    <div class="impacto-copy reveal">
      <p class="section-label" style="color:rgba(250,250,248,0.35)">Impacto</p>
      <h2 class="impacto-h2">IA medida em <em>resultado.</em></h2>
    </div>
    <div class="impacto-grid reveal">
      <div class="impacto-item">
        <div class="impacto-n">24<span>/7</span></div>
        <div class="impacto-l">Operação autônoma</div>
      </div>
      <div class="impacto-item">
        <div class="impacto-n">7<span>+</span></div>
        <div class="impacto-l">Sistemas multi-agente</div>
      </div>
      <div class="impacto-item">
        <div class="impacto-n">10<span>x</span></div>
        <div class="impacto-l">Velocidade de entrega</div>
      </div>
      <div class="impacto-item">
        <div class="impacto-n">0<span>€</span></div>
        <div class="impacto-l">Código sem programar</div>
      </div>
    </div>
  </div>
</section>

<!-- DIFERENCIAIS -->
<section id="diferenciais">
  <div class="container">
    <div class="dif-grid">
      <div class="dif-sticky reveal">
        <p class="section-label">Por que a UltraWork AI</p>
        <h2 class="dif-h2">Não vendemos<br><em>promessa.</em><br>Entregamos sistema.</h2>
        <p class="dif-note">
          O mercado está cheio de consultores que falam de IA. A UltraWork AI constrói, entrega e mede — com responsabilidade técnica e orientação a resultado desde o primeiro dia.
        </p>
      </div>

      <div class="dif-list reveal" style="transition-delay:0.15s">
        <div class="dif-item">
          <span class="dif-num">01</span>
          <div>
            <p class="dif-title">Estratégia + execução no mesmo lugar</p>
            <p class="dif-desc">Não precisar coordenar uma agência de estratégia com um desenvolvedor. Recebo o desafio do negócio, desenho a solução e construo — do início ao resultado.</p>
          </div>
        </div>
        <div class="dif-item">
          <span class="dif-num">02</span>
          <div>
            <p class="dif-title">IA aplicada a negócio real, não a demos</p>
            <p class="dif-desc">Cada sistema é construído para operar em produção, com casos de uso reais, integrações reais e métricas reais. Nada de protótipos que não saem do papel.</p>
          </div>
        </div>
        <div class="dif-item">
          <span class="dif-num">03</span>
          <div>
            <p class="dif-title">Velocidade de execução fora do comum</p>
            <p class="dif-desc">Utilizando as melhores ferramentas de IA disponíveis, entrego em dias o que times tradicionais levam semanas para construir — sem abrir mão da qualidade.</p>
          </div>
        </div>
        <div class="dif-item">
          <span class="dif-num">04</span>
          <div>
            <p class="dif-title">Stack de ponta, sempre atualizado</p>
            <p class="dif-desc">Claude API, N8N, Lovable, Supabase, HeyGen, Veo 3 — trabalho com as ferramentas que definem o estado da arte em IA aplicada. O mercado muda rápido; aqui a gente acompanha.</p>
          </div>
        </div>
        <div class="dif-item">
          <span class="dif-num">05</span>
          <div>
            <p class="dif-title">Baseado em Belo Horizonte, com visão global</p>
            <p class="dif-desc">Conheço o mercado brasileiro — seus desafios, suas oportunidades e o ritmo certo. Construo soluções com contexto local e tecnologia global.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VISÃO -->
<section id="visao">
  <div class="container">
    <div class="visao-inner reveal">
      <p class="section-label">Visão de futuro</p>
      <p class="visao-quote">
        "O Brasil tem talento. Tem mercado.<br>
        Falta <em>infraestrutura inteligente</em><br>
        para competir em escala global."
      </p>
      <p class="visao-sub">
        A UltraWork AI está construindo essa infraestrutura — um sistema, um agente, uma empresa de cada vez. Nossa visão é ser a principal referência em IA aplicada a negócios no Brasil.
      </p>
      <a href="#cta" class="btn btn-dark" style="margin: 0 auto; display: inline-flex;">
        Fazer parte dessa visão
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="cta">
  <div class="container">
    <div class="cta-inner reveal">
      <p class="cta-tag">Próximo passo</p>
      <h2 class="cta-h2">Pronto para <em>crescer</em><br>com inteligência?</h2>
      <p class="cta-sub">
        Me chama no WhatsApp. Em uma conversa, mostro como a IA pode transformar sua operação nos próximos 30 dias.
      </p>
      <a href="https://wa.me/5531991801259?text=Olá%20Sandro!%20Vi%20seu%20portfólio%20e%20quero%20saber%20mais." class="btn-white" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.857L.057 23.082a.75.75 0 0 0 .916.916l5.225-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.948-1.352l-.355-.21-3.678 1.04 1.04-3.678-.21-.355A9.694 9.694 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
        </svg>
        Conversar no WhatsApp
      </a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <a href="#" class="foot-brand">UltraWork AI</a>
  <p class="foot-copy">© 2025 UltraWork AI · Belo Horizonte, MG · Construído com Inteligência Artificial</p>
</footer>

<script>
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      const delay = parseFloat(e.target.style.transitionDelay || 0) * 1000;
      setTimeout(() => e.target.classList.add('up'), delay > 0 ? 0 : i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
</script>
</body>
</html>
