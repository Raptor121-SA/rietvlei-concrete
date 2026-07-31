import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export default function ContactPage() {
  return (<>
    <section className="border-b border-border bg-card"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"><p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">Contact</p><h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Get in Touch</h1><p className="mt-4 text-lg text-muted-foreground max-w-2xl">Have a question or project in mind? We'd love to hear from you.</p></div></section>
    <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-2"><h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h2><form className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5"><div><label className="block text-sm font-bold text-foreground mb-1.5">Full Name</label><input type="text" className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Smith" /></div><div><label className="block text-sm font-bold text-foreground mb-1.5">Email</label><input type="email" className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@example.com" /></div></div>
        <div><label className="block text-sm font-bold text-foreground mb-1.5">Phone</label><input type="tel" className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+27 12 345 6789" /></div>
        <div><label className="block text-sm font-bold text-foreground mb-1.5">Subject</label><select className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option>Select a topic</option><option>Pre-cast Walls</option><option>Concrete House</option><option>Retaining Wall</option><option>Decorative Concrete</option><option>Other</option></select></div>
        <div><label className="block text-sm font-bold text-foreground mb-1.5">Message</label><textarea rows={5} className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y" placeholder="Tell us about your project..." /></div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">Send Message<Send className="h-4 w-4" /></button>
      </form></div>
      <div className="space-y-8"><h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Details</h2>
        <div className="space-y-5">
          <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10"><Phone className="h-5 w-5 text-primary" /></div><div><p className="text-sm font-bold text-foreground">Phone</p><a href="tel:+27123456789" className="text-sm text-muted-foreground hover:text-primary">+27 12 345 6789</a></div></div>
          <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10"><Mail className="h-5 w-5 text-primary" /></div><div><p className="text-sm font-bold text-foreground">Email</p><a href="mailto:info@rietvleiconcrete.co.za" className="text-sm text-muted-foreground hover:text-primary">info@rietvleiconcrete.co.za</a></div></div>
          <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div><div><p className="text-sm font-bold text-foreground">Address</p><p className="text-sm text-muted-foreground">Plot 42, Rietvlei<br />Gauteng, South Africa</p></div></div>
          <div className="flex items-start gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10"><Clock className="h-5 w-5 text-primary" /></div><div><p className="text-sm font-bold text-foreground">Business Hours</p><p className="text-sm text-muted-foreground">Mon-Fri: 7:00-17:00<br />Sat: 8:00-13:00<br />Sun: Closed</p></div></div>
        </div>
        <div className="rounded-sm border border-border bg-muted/30 p-6"><h3 className="font-serif text-lg font-bold text-foreground mb-2">Need a Quote?</h3><p className="text-sm text-muted-foreground mb-4">Use our quote form for a faster estimate.</p><Link href="/quote" className="inline-flex items-center gap-1.5 rounded-sm bg-cta px-4 py-2 text-sm font-bold text-cta-foreground transition-all hover:bg-cta/90">Get a Quote<ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </div></div></section>
  </>);
}
