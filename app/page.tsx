import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Clock, Award, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, #1E293B 1px, transparent 0)", backgroundSize: "32px 32px"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                <span className="text-xs font-medium text-primary tracking-wide">PRE-CAST CONCRETE SPECIALISTS</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Built Solid.<br /><span className="text-primary">Built to Last.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Rietvlei Concrete delivers premium pre-cast concrete walls, houses, and retaining structures across Gauteng. Engineered for strength, designed for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-sm bg-cta px-6 py-3.5 text-base font-bold text-cta-foreground transition-all hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2">
                  Get Your Free Quote<ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-border px-6 py-3.5 text-base font-bold text-foreground transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-sm bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full h-full opacity-30" fill="none">
                    <rect x="40" y="30" width="140" height="100" rx="4" className="fill-primary/20 stroke-primary" strokeWidth="2" />
                    <rect x="200" y="50" width="160" height="120" rx="4" className="fill-secondary/20 stroke-secondary" strokeWidth="2" />
                    <rect x="60" y="155" width="280" height="95" rx="4" className="fill-primary/15 stroke-primary" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ icon: Shield, label: "SANS Certified", desc: "Quality assured" }, { icon: Clock, label: "15+ Years", desc: "Industry experience" }, { icon: Award, label: "200+ Projects", desc: "Completed & counting" }, { icon: CheckCircle, label: "Guaranteed", desc: "Workmanship warranty" }].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                <div><p className="text-sm font-bold text-foreground">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">What We Build</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Concrete Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Pre-cast Walls", "Concrete Houses", "Retaining Walls", "Decorative Concrete"].map((title, i) => (
              <div key={i} className="group relative rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-sm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">Quality pre-cast concrete solutions engineered for South African conditions.</p>
                <Link href="/services" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-cta transition-colors">Learn more<ChevronRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div><p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">Why Rietvlei Concrete</p><h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Quality You Can Build On</h2></div>
              <div className="space-y-6">
                {[{title:"Precision Engineering",desc:"Every panel is cast to exact specifications in our controlled facility."},{title:"Rapid Installation",desc:"Pre-cast means less time on site. Most projects completed in days."},{title:"Cost Effective",desc:"Factory production reduces waste and labour costs."},{title:"Local Expertise",desc:"Based in Gauteng, we understand local conditions and regulations."}].map((item,i) => (
                  <div key={i} className="flex gap-4"><div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-primary/10"><CheckCircle className="h-4 w-4 text-primary" /></div><div><h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p></div></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{value:"15+",label:"Years Experience"},{value:"200+",label:"Projects Delivered"},{value:"100%",label:"Client Satisfaction"},{value:"50km",label:"Service Radius"}].map((stat,i) => (
                <div key={i} className="rounded-sm border border-border bg-muted/50 p-6 text-center"><p className="font-serif text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p><p className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">{stat.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm bg-primary px-8 py-14 sm:px-14 sm:py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"24px 24px"}} />
            <div className="relative">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">Ready to Start Your Project?</h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">Get in touch for a free consultation and quote. We'll help you find the right concrete solution for your needs.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-sm bg-cta px-8 py-3.5 text-base font-bold text-cta-foreground transition-all hover:bg-cta/90">Request a Quote<ArrowRight className="h-5 w-5" /></Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-bold text-primary-foreground transition-all hover:border-primary-foreground/60">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
