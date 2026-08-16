// Gallery Ledger design: compact editorial primitives for internal pages, keeping the same type and gold rule language.
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) { return <section className="page-hero"><p className="eyebrow"><span className="eyebrow-rule" /> {eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></section>; }
export function CtaBand({ title, label = "Book an appointment" }: { title: ReactNode; label?: string }) { return <section className="cta-band"><p className="eyebrow">Upper Echelon Media</p><h2>{title}</h2><Link className="text-link" href="/contact">{label} <ArrowUpRight size={17} /></Link></section>; }
