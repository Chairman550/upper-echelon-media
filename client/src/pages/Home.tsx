// Gallery Ledger design: editorial asymmetry, warm ivory paper, charcoal ink, antique-gold signal.
import { FormEvent, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const logo = "/manus-storage/UpperEchelonMediaLogo32_34b4595b.png";
const heroImage = "/manus-storage/uem-hero_d0993f40.jpg";
const architectureImage = "/manus-storage/uem-architecture_7c35b6b6.jpg";
const workImage = "/manus-storage/uem-studio_87419fb9.jpg";

const capabilities = [
  { number: "01", title: "Brand strategy", copy: "The sharpest version of your point of view—distilled, named, and ready to move." },
  { number: "02", title: "Editorial production", copy: "Stories with a considered frame, a distinct voice, and the staying power to travel." },
  { number: "03", title: "Content systems", copy: "A repeatable creative rhythm that keeps every channel in conversation." },
];

const work = [
  { index: "01", type: "Brand world / Film", title: "The quiet power of a point of view", image: workImage },
  { index: "02", type: "Editorial direction / Campaign", title: "Designed to hold attention", image: architectureImage },
  { index: "03", type: "Content system / Launch", title: "A signal with somewhere to go", image: heroImage },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <div className="utility-bar"><span>Remote creative direction, wherever the work takes you.</span><span className="utility-bar-right">Available for select bookings <span className="utility-dot" /></span></div>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Upper Echelon Media home" onClick={closeMenu}>
          <img src={logo} alt="Upper Echelon Media monogram" className="brand-mark" />
          <span className="brand-name">Upper Echelon <span>Media</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#book" onClick={closeMenu}>Book an appointment</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
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

      <section className="capabilities section-grid" id="services">
        <div className="section-rail"><span>02</span><span className="rail-line" /><span>Capabilities</span></div>
        <div className="capabilities-intro"><p className="eyebrow">What we make room for</p><h2>Clarity is<br /><em>the</em> advantage.</h2></div>
        <div className="capability-list">
          {capabilities.map((item) => <article className="capability-item" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowUpRight size={19} /></article>)}
        </div>
      </section>

      <section className="remote-section section-grid" id="approach"><div className="remote-copy"><p className="eyebrow"><span className="eyebrow-rule" /> Built for the way you work <span className="eyebrow-number">003</span></p><h2>No studio.<br /><em>No</em> distance.</h2><p>Upper Echelon Media works remotely with founders, teams, and brands who value a clear point of view. Every engagement is shaped around your goals, your audience, and the momentum you already have.</p><a href="#book" className="text-link">Choose your time <ArrowUpRight size={17} /></a></div><div className="remote-note"><span className="remote-number">03</span><span>Remote by design</span><span className="rail-line" /><span>Anywhere / Everywhere</span></div></section>

      <section className="work-section" id="work">
        <div className="work-heading section-grid"><div className="section-rail"><span>04</span><span className="rail-line" /><span>Selected work</span></div><div><p className="eyebrow">A few things we have made</p><h2>Proof of <em>perspective.</em></h2></div><a href="#contact" className="text-link work-link">Discuss a project <ArrowUpRight size={17} /></a></div>
        <div className="work-grid">{work.map((project) => <a className="work-card" href="#contact" key={project.index}><div className="work-image"><img src={project.image} alt="" /><span className="work-index">{project.index}</span></div><div className="work-meta"><span>{project.type}</span><ArrowUpRight size={17} /></div><h3>{project.title}</h3></a>)}</div>
      </section>

      <section className="booking-section section-grid" id="book"><div className="booking-intro"><p className="eyebrow"><span className="eyebrow-rule" /> Book an appointment <span className="eyebrow-number">05</span></p><h2>Let’s make<br /><em>room</em> for it.</h2><p>Choose a time for a focused conversation. We’ll confirm the details by email.</p></div><div className="booking-form-wrap">{submitted ? <div className="booking-success"><span className="success-mark">✓</span><p className="eyebrow">Request received</p><h3>We’ll be in touch shortly.</h3><p>Your appointment request is on its way. Keep an eye on your inbox for confirmation.</p><button className="text-link" onClick={() => setSubmitted(false)}>Book another time <ArrowUpRight size={17} /></button></div> : <form className="booking-form" onSubmit={handleBooking}><label>What would you like to discuss?<select required defaultValue=""><option value="" disabled>Select a service</option><option>Brand strategy</option><option>Editorial production</option><option>Content system</option><option>General consultation</option></select></label><div className="form-row"><label>Preferred date<input required type="date" /></label><label>Preferred time<select required defaultValue=""><option value="" disabled>Select time</option><option>10:00 AM</option><option>12:00 PM</option><option>2:00 PM</option><option>4:00 PM</option></select></label></div><label>Your name<input required type="text" placeholder="Full name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Anything we should know?<textarea rows={3} placeholder="A sentence or two is plenty." /></label><button className="form-submit" type="submit">Request appointment <ArrowUpRight size={17} /></button></form>}</div></section>
      <section className="contact-section section-grid" id="contact"><div className="contact-ornament">UEM<br /><span>→</span></div><div className="contact-copy"><p className="eyebrow">06 / Contact</p><h2>Bring us<br /><em>the</em> good stuff.</h2><p>Prefer email? Tell us where you want to go and we’ll take it from there.</p><a href="mailto:hello@upperechelon.media" className="contact-link">hello@upperechelon.media <ArrowUpRight size={19} /></a></div></section>

      <footer className="site-footer"><a className="footer-brand" href="#top"><img src={logo} alt="" /><span>Upper Echelon Media</span></a><p>Remote media &amp; storytelling<br />New York · Everywhere</p><div className="footer-links"><a href="#work">Instagram</a><a href="#book">Book</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div><small>© 2026 Upper Echelon Media</small></footer>
    </main>
  );
}
