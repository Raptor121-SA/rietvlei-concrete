"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          </div>
          <div className="flex flex-col leading-tight"><span className="font-serif text-lg font-bold tracking-tight text-foreground">Rietvlei</span><span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Concrete</span></div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link=>{const isActive=pathname===link.href;return(<Link key={link.href} href={link.href} className={"relative px-3 py-2 text-sm font-medium transition-colors rounded-sm "+(isActive?"text-primary":"text-foreground/70 hover:text-foreground")}>{link.label}{isActive&&<span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary" />}</Link>)})}
        </nav>
        <div className="hidden md:block"><Link href="/quote" className="inline-flex items-center gap-1.5 rounded-sm bg-cta px-4 py-2 text-sm font-bold text-cta-foreground transition-all hover:bg-cta/90">Get a Quote<ChevronRight className="h-4 w-4" /></Link></div>
        <button className="md:hidden rounded-sm p-2 text-foreground/70 hover:text-foreground hover:bg-muted" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X className="h-5 w-5" />:<Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen&&(<div className="md:hidden border-t border-border bg-background"><nav className="flex flex-col px-4 py-3 gap-1">{navLinks.map(link=>{const isActive=pathname===link.href;return(<Link key={link.href} href={link.href} onClick={()=>setMobileOpen(false)} className={"rounded-sm px-3 py-2.5 text-sm font-medium "+(isActive?"bg-primary/10 text-primary":"text-foreground/70 hover:bg-muted hover:text-foreground")}>{link.label}</Link>)})}<Link href="/quote" onClick={()=>setMobileOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-sm bg-cta px-4 py-2.5 text-sm font-bold text-cta-foreground">Get a Quote<ChevronRight className="h-4 w-4" /></Link></nav></div>)}
    </header>
  );
}
