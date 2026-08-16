// Gallery Ledger design: editorial asymmetry, warm ivory paper, charcoal ink, antique-gold signal.
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const logo = "/manus-storage/UpperEchelonMediaLogo32_34b4595b.png";
const heroImage = "/manus-storage/uem-hero_d0993f40.jpg";
const studioImage = "/manus-storage/uem-studio_87419fb9.jpg";
const architectureImage = "/manus-storage/uem-architecture_7c35b6b6.jpg";

const capabilities = [
  { number: "01", title: "Brand strategy", copy: "The sharpest version of your point of view—distilled, named, and ready to move." },
  { number: "02", title: "Editorial production", copy: "Stories with a considered frame, a distinct voice, and the staying power to travel." },
  { number: "03", title: "Content systems", copy: "A repeatable creative rhythm that keeps every channel in conversation." },
];

const work = [
  { index: "01", type: "Brand world / Film", title: "The quiet power of a point of view", image: studioImage },
  { index: "02", type: "Editorial direction / Campaign", title: "Designed to hold attention", image: architectureImage },
  { index: "03", type: "Content system / Launch", title: "A signal with somewhere to go", image: heroImage },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Upper Echelon Media home" onClick={closeMenu}>
          <img src={logo} alt="Upper Echelon Media monogram" className="brand-mark" />
          <span className="brand-name">Upper Echelon <span>Media</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-grid" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> Independent media studio <span className="eyebrow-number">001</span></p>
          <h1>Make the<br /><em>signal</em><br />impossible<br />to miss.</h1>
          <p className="hero-intro">Upper Echelon Media builds the strategy, stories, and visual worlds that move brands from present to unforgettable.</p>
          <a href="#contact" className="text-link">Find your signal <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Art-directed creative studio table" />
          <div className="hero-caption"><span>UEM / 2026</span><span>Creative direction &amp; production</span></div>
        </div>
        <div className="hero-side-note">Scroll to explore <span className="vertical-rule" /></div>
      </section>

      <section className="capabilities section-grid" id="capabilities">
        <div className="section-rail"><span>02</span><span className="rail-line" /><span>Capabilities</span></div>
        <div className="capabilities-intro"><p className="eyebrow">What we make room for</p><h2>Clarity is<br /><em>the</em> advantage.</h2></div>
        <div className="capability-list">
          {capabilities.map((item) => <article className="capability-item" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowUpRight size={19} /></article>)}
        </div>
      </section>

      <section className="studio section-grid" id="studio">
        <div className="studio-image"><img src={studioImage} alt="Sunlit Upper Echelon Media production studio" /><span className="image-stamp">EST. / 2026</span></div>
        <div className="studio-copy"><p className="eyebrow"><span className="eyebrow-rule" /> The studio <span className="eyebrow-number">003</span></p><h2>Less noise.<br /><em>More</em> meaning.</h2><p>We are a media and storytelling studio for brands with something worth saying. Our work begins with an honest look at what makes you matter—and ends with a world people want to step into.</p><p>Small by design. Exacting by nature. Built to leave a mark without shouting.</p><a href="#contact" className="text-link">Meet the studio <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading section-grid"><div className="section-rail"><span>04</span><span className="rail-line" /><span>Selected work</span></div><div><p className="eyebrow">A few things we have made</p><h2>Proof of <em>perspective.</em></h2></div><a href="#contact" className="text-link work-link">Discuss a project <ArrowUpRight size={17} /></a></div>
        <div className="work-grid">{work.map((project) => <a className="work-card" href="#contact" key={project.index}><div className="work-image"><img src={project.image} alt="" /><span className="work-index">{project.index}</span></div><div className="work-meta"><span>{project.type}</span><ArrowUpRight size={17} /></div><h3>{project.title}</h3></a>)}</div>
      </section>

      <section className="contact-section section-grid" id="contact"><div className="contact-ornament">UEM<br /><span>→</span></div><div className="contact-copy"><p className="eyebrow">05 / Contact</p><h2>Bring us<br /><em>the</em> good stuff.</h2><p>Have a story, a shift, or a sharp idea in the making? Tell us where you want to go.</p><a href="mailto:hello@upperechelon.media" className="contact-link">hello@upperechelon.media <ArrowUpRight size={19} /></a></div></section>

      <footer className="site-footer"><a className="footer-brand" href="#top"><img src={logo} alt="" /><span>Upper Echelon Media</span></a><p>Independent media studio<br />New York · Everywhere</p><div className="footer-links"><a href="#studio">Instagram</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div><small>© 2026 Upper Echelon Media</small></footer>
    </main>
  );
}
