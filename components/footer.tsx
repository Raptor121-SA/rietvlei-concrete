import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2"><div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div><div className="flex flex-col leading-tight"><span className="font-serif text-lg font-bold tracking-tight">Rietvlei</span><span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Concrete</span></div></Link>
            <p className="text-sm text-muted-foreground leading-relaxed">Quality pre-cast concrete solutions. Walls, houses, retaining walls, and decorative concrete — built to last.</p>
          </div>
          <div><h3 className="font-serif text-base font-semibold mb-4">Quick Links</h3><ul className="space-y-2.5">{[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/projects",label:"Our Projects"},{href:"/about",label:"About Us"}].map(l=>(<li key={l.href}><Link href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link></li>))}</ul></div>
          <div><h3 className="font-serif text-base font-semibold mb-4">Our Services</h3><ul className="space-y-2.5">{["Pre-cast Walls","Concrete Houses","Retaining Walls","Decorative Concrete"].map(s=>(<li key={s}><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</Link></li>))}</ul></div>
          <div><h3 className="font-serif text-base font-semibold mb-4">Contact Us</h3><ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span>+27 12 345 6789</span></li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span>info@rietvleiconcrete.co.za</span></li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span>Rietvlei, Gauteng, South Africa</span></li>
          </ul></div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Rietvlei Concrete. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
