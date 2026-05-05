:root {
  --bg: #f8f7f1;
  --surface: #ffffff;
  --surface-2: #eef4c7;
  --text: #171717;
  --muted: #505050;
  --line: rgba(23, 23, 23, 0.08);
  --lime: #9ec90f;
  --lime-dark: #6f9700;
  --red: #ef3f58;
  --yellow: #ffe56a;
  --dark: #0e0e0e;
  --shadow: 0 18px 60px rgba(0,0,0,.12);
  --radius: 24px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
.container { width: min(1180px, calc(100% - 2rem)); margin: 0 auto; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(248,247,241,.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.nav-wrap {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: .8rem;
  font-weight: 800;
  letter-spacing: .02em;
}
.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--dark);
  color: var(--lime);
  box-shadow: inset 0 0 0 2px rgba(255,255,255,.08);
}
.brand-text { font-size: 1.6rem; }
.site-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 700;
}
.site-nav a:not(.btn) { position: relative; }
.site-nav a:not(.btn)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--lime);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .25s ease;
}
.site-nav a:not(.btn):hover::after { transform: scaleX(1); }
.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  padding: 0;
}
.nav-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  margin: 5px 0;
  background: var(--text);
  border-radius: 99px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  border-radius: 999px;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, var(--lime), var(--lime-dark));
  color: white;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(111,151,0,.22);
  transition: transform .2s ease, box-shadow .2s ease;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 16px 28px rgba(111,151,0,.28); }
.btn--small { padding: .85rem 1.25rem; }
.btn--ghost {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--line);
  box-shadow: none;
}
.btn--ghost-dark { color: #fff; border-color: rgba(255,255,255,.22); }
.btn--ghost:hover { border-color: rgba(23,23,23,.25); }

.hero {
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 30%, rgba(255,255,255,.55), transparent 18%),
    radial-gradient(circle at 75% 20%, rgba(255,229,106,.55), transparent 34%),
    linear-gradient(115deg, #fffce9 0%, #f2f7cc 42%, #cde97e 100%);
}
.hero-grid {
  min-height: calc(100vh - 78px);
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 2rem;
  align-items: center;
  padding: 4rem 0 3rem;
}
.eyebrow {
  margin: 0 0 .8rem;
  font-size: .85rem;
  font-weight: 800;
  letter-spacing: .16em;
  color: var(--red);
}
.eyebrow--lime { color: var(--lime); }
.hero-copy h1,
.hero-copy .tagline,
.section h2,
.brand-strip h2,
.cta h2,
.site-footer h3 {
  margin: 0;
}
.hero-copy h1 {
  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(4.2rem, 10vw, 7.6rem);
  line-height: .88;
  letter-spacing: .02em;
}
.hero-copy h1 .accent { color: var(--red); }
.tagline {
  margin-top: 1rem;
  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1;
  text-transform: uppercase;
}
.lead {
  max-width: 42rem;
  margin: 1.25rem 0 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--muted);
}
.hero-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .9rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  max-width: 34rem;
}
.hero-points li {
  display: flex;
  align-items: center;
  gap: .7rem;
  font-weight: 700;
}
.hero-points li::before {
  content: "✓";
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  background: var(--lime);
  color: #fff;
  border-radius: 50%;
  font-size: .9rem;
  flex: none;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; }

.hero-visual {
  position: relative;
  min-height: 760px;
}
.fruit, .ginger, .bottle, .bottle-shadow { position: absolute; }
.bottle-shadow {
  width: 240px;
  height: 40px;
  left: 50%;
  bottom: 66px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,.24), rgba(0,0,0,0) 70%);
  filter: blur(14px);
}
.bottle {
  width: 270px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%) rotate(6deg);
}
.cap {
  width: 104px;
  height: 72px;
  margin: 0 auto -12px;
  border-radius: 22px 22px 14px 14px;
  background:
    repeating-linear-gradient(90deg, #161616 0 10px, #262626 10px 14px),
    linear-gradient(#242424, #0d0d0d);
}
.bottle-body {
  height: 620px;
  border-radius: 70px 70px 34px 34px / 120px 120px 26px 26px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.16) 10%, rgba(255,255,255,.04) 16%, transparent 24%),
    linear-gradient(140deg, #ff7790, #ff4d63 52%, #f1304f 100%);
  box-shadow:
    inset 10px 0 22px rgba(255,255,255,.28),
    inset -10px 0 18px rgba(120, 0, 17, .18),
    var(--shadow);
  position: relative;
  overflow: hidden;
}
.bottle-body::before,
.bottle-body::after {
  content: "";
  position: absolute;
  top: 72px;
  bottom: 58px;
  width: 32px;
  background: repeating-radial-gradient(circle at center, rgba(255,255,255,.22) 0 10px, rgba(255,255,255,0) 10px 32px);
  opacity: .7;
}
.bottle-body::before { left: 10px; }
.bottle-body::after { right: 10px; }
.label-top {
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 152px;
  text-align: center;
  border-radius: 16px;
  padding: .45rem .7rem;
  background: #1d1d1d;
  color: #fff;
  font-weight: 800;
  font-size: .84rem;
}
.label-main {
  position: absolute;
  inset: 110px 36px 86px;
  border-radius: 44px;
  background: linear-gradient(180deg, #fff, #f2efe9 100%);
  box-shadow: inset 0 0 0 2px rgba(0,0,0,.06);
  padding: 2rem 1.2rem;
  text-align: center;
}
.label-title {
  font-family: 'Anton', Impact, sans-serif;
  font-size: 3rem;
  line-height: .95;
  color: var(--lime);
}
.label-title span { color: var(--red); display: block; }
.fist { font-size: 4rem; line-height: 1; margin: .7rem 0; }
.label-slogan,
.label-flavors { font-weight: 700; line-height: 1.45; }
.label-slogan { font-size: .92rem; text-transform: uppercase; }
.label-flavors { font-size: .95rem; margin-top: 1rem; }
.label-badge {
  display: inline-block;
  margin-top: 1rem;
  padding: .6rem 1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--lime), var(--lime-dark));
  color: #fff;
  font-weight: 800;
}

.fruit {
  border-radius: 50%;
  box-shadow: var(--shadow);
}
.fruit::before {
  content: "";
  position: absolute;
  inset: 10%;
  border-radius: 50%;
}
.fruit--kiwi {
  width: 150px; height: 150px;
  right: 30px; top: 220px;
  background: radial-gradient(circle at center, #f8ffcd 0 18%, #8ec741 19% 58%, #6b4a1f 59% 100%);
}
.fruit--kiwi::before { background: radial-gradient(circle, transparent 0 48%, rgba(255,255,255,.25) 49% 100%); }
.fruit--lime {
  width: 128px; height: 128px;
  left: 50px; top: 260px;
  background: radial-gradient(circle, #e7ff9a 0 18%, #b8dd30 19% 58%, #6baa1d 59% 100%);
}
.fruit--lemon {
  width: 170px; height: 170px;
  right: 60px; top: 120px;
  background: radial-gradient(circle, #fff4b0 0 18%, #ffd84a 19% 58%, #d0a515 59% 100%);
}
.fruit--strawberry {
  width: 138px; height: 138px;
  left: 20px; bottom: 110px;
  border-radius: 40% 40% 55% 55% / 34% 34% 68% 68%;
  background: radial-gradient(circle at 50% 35%, #ff9faf 0 10%, #ee334d 28% 100%);
}
.fruit--strawberry::before {
  inset: 12px auto auto 50%;
  width: 52px; height: 26px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 100%, #58a500 0 48%, transparent 49%);
}
.ginger {
  width: 180px;
  height: 120px;
  right: 0;
  bottom: 160px;
  border-radius: 50px;
  background:
    radial-gradient(circle at 26% 35%, #f7ddb3 0 18%, transparent 19%),
    radial-gradient(circle at 55% 45%, #ecd0a1 0 19%, transparent 20%),
    radial-gradient(circle at 74% 38%, #e6c18d 0 18%, transparent 19%),
    linear-gradient(135deg, #d9b17c, #f2d4a7);
  box-shadow: var(--shadow);
  transform: rotate(-12deg);
}
.ginger::before,
.ginger::after {
  content: "";
  position: absolute;
  background: linear-gradient(135deg, #d9b17c, #f2d4a7);
  border-radius: 50px;
}
.ginger::before {
  width: 82px; height: 60px; left: 12px; top: -22px; transform: rotate(20deg);
}
.ginger::after {
  width: 86px; height: 64px; right: 26px; top: -18px; transform: rotate(-14deg);
}

.brand-strip {
  background: #101010;
  color: #fff;
  padding: 2.6rem 0;
}
.brand-strip-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
}
.brand-strip h2,
.section h2,
.cta h2 {
  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1;
  letter-spacing: .01em;
}
.brand-strip p { color: rgba(255,255,255,.8); line-height: 1.8; }
.brand-icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.icon-card {
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 20px;
  padding: 1.25rem;
  background: rgba(255,255,255,.03);
  display: flex;
  flex-direction: column;
  gap: .65rem;
  min-height: 120px;
}
.icon-card span { font-size: 1.8rem; }

.section { padding: 5rem 0; }
.section--tint { background: linear-gradient(180deg, #f4f8dd 0%, #f7f7ef 100%); }
.split {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 2rem;
  align-items: start;
}
.section p, .product-card li, .ingredient-card p, .benefit-card p, .lifestyle p, .site-footer p {
  line-height: 1.8;
  color: var(--muted);
}
.product-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  padding: 1.8rem;
}
.product-card h3,
.ingredient-card h3,
.benefit-card h3 {
  margin: 0 0 1rem;
  font-size: 1.15rem;
}
.product-card ul { margin: 0; padding-left: 1.1rem; }

.section-heading { max-width: 760px; margin-bottom: 2rem; }
.ingredient-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.ingredient-card,
.benefit-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.25rem;
  box-shadow: 0 12px 30px rgba(0,0,0,.05);
}
.ingredient-icon {
  width: 86px;
  height: 86px;
  margin-bottom: 1rem;
  border-radius: 50%;
  box-shadow: inset 0 0 0 8px rgba(255,255,255,.25), var(--shadow);
}
.ingredient-icon--kiwi { background: radial-gradient(circle, #f8ffcd 0 18%, #8ec741 19% 58%, #6b4a1f 59% 100%); }
.ingredient-icon--lime { background: radial-gradient(circle, #e7ff9a 0 18%, #b8dd30 19% 58%, #6baa1d 59% 100%); }
.ingredient-icon--lemon { background: radial-gradient(circle, #fff4b0 0 18%, #ffd84a 19% 58%, #d0a515 59% 100%); }
.ingredient-icon--berry {
  border-radius: 40% 40% 55% 55% / 34% 34% 68% 68%;
  background: radial-gradient(circle at 50% 35%, #ff9faf 0 10%, #ee334d 28% 100%);
}
.ingredient-icon--ginger {
  border-radius: 28px;
  background: linear-gradient(135deg, #d9b17c, #f2d4a7);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.benefit-card span {
  display: inline-grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(158, 201, 15, .12);
  color: var(--lime-dark);
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.lifestyle {
  background: linear-gradient(180deg, #fff, #f7f7ef);
}
.lifestyle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}
.lifestyle-tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.life-tile {
  min-height: 120px;
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(158,201,15,.18), rgba(239,63,88,.12)),
    #fff;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 12px 24px rgba(0,0,0,.04);
}

.cta {
  background: linear-gradient(135deg, #101010, #1a1a1a 56%, #252525);
  color: #fff;
  padding: 4rem 0;
}
.cta-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}
.cta p { color: rgba(255,255,255,.78); line-height: 1.8; }
.cta-actions { display: flex; flex-wrap: wrap; gap: 1rem; }

.site-footer {
  background: #090909;
  color: #fff;
  padding: 2.25rem 0 3rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 2rem;
}
.brand--footer { margin-bottom: 1rem; }
.site-footer h3 { font-size: 1.1rem; margin-bottom: .8rem; }

@media (max-width: 1100px) {
  .hero-grid,
  .brand-strip-grid,
  .split,
  .lifestyle-grid,
  .cta-grid,
  .footer-grid { grid-template-columns: 1fr; }

  .ingredient-grid,
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-icons { grid-template-columns: 1fr; }
  .hero-visual { min-height: 680px; }
}

@media (max-width: 820px) {
  .nav-toggle { display: block; }
  .site-nav {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    background: rgba(248,247,241,.98);
    border-bottom: 1px solid var(--line);
    padding: 1rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }
  .site-nav.is-open { display: flex; }
  .hero-grid { padding-top: 2.5rem; }
  .hero-points { grid-template-columns: 1fr; }
  .hero-visual {
    min-height: 620px;
    transform: scale(.88);
    transform-origin: top center;
    margin-top: -10px;
  }
  .ingredient-grid,
  .benefits-grid,
  .lifestyle-tiles { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .container { width: min(100% - 1.2rem, 1180px); }
  .brand-text { font-size: 1.2rem; }
  .hero-copy h1 { font-size: 4rem; }
  .hero-visual {
    min-height: 540px;
    transform: scale(.73);
    margin: -10px -40px 0;
  }
  .btn, .btn--small { width: 100%; }
  .hero-actions, .cta-actions { flex-direction: column; }
}
