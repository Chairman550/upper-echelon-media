// Gallery Ledger design: shared editorial shell with black-gold utility bar and clear consumer navigation.
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";

const logo = "/manus-storage/UpperEchelonMediaLogo32_34b4595b.png";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const close = () => setMenuOpen(false);
  const nav = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/portfolio", label: "Portfolio" }, { href: "/services", label: "Services" }, { href: "/contact", label: "Contact / Booking" }];
  return <main className="site-shell"><div className="utility-bar"><span>Remote creative direction, wherever the work takes you.</span><span className="utility-bar-right">Available for select bookings <span className="utility-dot" /></span></div><header className="site-header"><Link className="brand-lockup" href="/" onClick={close}><img src={logo} alt="Upper Echelon Media monogram" className="brand-mark" /><span className="brand-name">Upper Echelon <span>Media</span></span></Link><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button><nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} className={`${location === item.href ? "active" : ""} ${item.href === "/contact" ? "nav-contact" : ""}`} href={item.href} onClick={close}>{item.label}{item.href === "/contact" && <ArrowUpRight size={15} />}</Link>)}</nav></header>{children}<footer className="site-footer"><Link className="footer-brand" href="/"><img src={logo} alt="" /><span>Upper Echelon Media</span></Link><p>Remote media &amp; storytelling<br />Kasoa · Central Region · Ghana</p><div className="footer-links"><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/contact">Book</Link><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div><small>© 2026 Upper Echelon Media</small></footer></main>;
}
