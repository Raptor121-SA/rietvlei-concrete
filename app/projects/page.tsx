import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {title:"Silver Lakes Estate Wall",category:"Pre-cast Walls",description:"2.4km perimeter boundary wall for a residential estate.",location:"Silver Lakes, Pretoria",year:"2025"},
  {title:"Centurion Office Park",category:"Pre-cast Walls",description:"Security wall with integrated electric fencing.",location:"Centurion, Gauteng",year:"2024"},
  {title:"Bronkhorstspruit Residence",category:"Concrete Houses",description:"160m2 three-bedroom pre-cast home. Built in 6 weeks.",location:"Bronkhorstspruit",year:"2025"},
  {title:"Rietvlei Farm House",category:"Concrete Houses",description:"Custom 220m2 pre-cast farmhouse with decorative flooring.",location:"Rietvlei, Gauteng",year:"2024"},
  {title:"N4 Highway Embankment",category:"Retaining Walls",description:"Engineered cantilever retaining wall system, 4.5m height.",location:"N4, Bronkhorstspruit",year:"2024"},
  {title:"Zambezi Drive Development",category:"Retaining Walls",description:"Terraced retaining walls for sloping residential development.",location:"Zambezi Drive, Pretoria",year:"2025"},
  {title:"Willow Park Estate Entrance",category:"Decorative Concrete",description:"Stamped concrete driveway with custom staining.",location:"Willow Park, Pretoria",year:"2025"},
  {title:"Mooikloof Patio & Pool Deck",category:"Decorative Concrete",description:"Polished concrete pool deck with acid-stained finish.",location:"Mooikloof, Pretoria",year:"2024"},
];

export default function ProjectsPage() {
  return (<>
    <section className="border-b border-border bg-card"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"><p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">Our Work</p><h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Projects & Portfolio</h1><p className="mt-4 text-lg text-muted-foreground max-w-2xl">Browse our completed projects across Gauteng.</p></div></section>
    <section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((project,i) => (<div key={i} className="group rounded-sm border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-sm"><div className="aspect-[4/3] bg-muted flex items-center justify-center"><div className="text-center p-4"><span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{project.category}</span></div></div><div className="p-5"><div className="flex items-center justify-between mb-2"><span className="text-[10px] font-bold tracking-[0.15em] uppercase text-cta">{project.category}</span><span className="text-[10px] text-muted-foreground">{project.year}</span></div><h3 className="font-serif text-lg font-bold text-foreground mb-1.5">{project.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p><p className="text-xs text-muted-foreground">Location: {project.location}</p></div></div>))}</div></div></section>
    <section className="bg-card border-t border-border py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h2 className="font-serif text-3xl font-bold text-foreground">Ready to Start Your Project?</h2><p className="mt-3 text-muted-foreground max-w-lg mx-auto">Let's discuss your requirements.</p><Link href="/quote" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-cta px-6 py-3 text-sm font-bold text-cta-foreground transition-all hover:bg-cta/90">Get a Quote<ArrowRight className="h-4 w-4" /></Link></div></section>
  </>);
}
