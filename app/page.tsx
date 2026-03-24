"use client";

import React, { useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Banner } from "@/components/ui/banner";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Footer } from "@/components/ui/footer-section";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  Lock,
  Rocket,
  ArrowRight,
  Target,
  Zap,
  ClipboardList,
  Users,
  Briefcase,
  Star,
  Menu,
  X,
} from "lucide-react";


/* ─── SERVICES DATA ─── */
const services = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-[#E8280B]" />,
    title: "AI & Machine Learning",
    desc: "ML engineers, LLM architects, data scientists, and MLOps specialists for AI-driven transformation programs.",
    tags: ["LLMs", "PyTorch", "MLOps", "NLP"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#F76B1C]" />,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP architects and DevSecOps professionals to build and scale critical infrastructure.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FFAB00]" />,
    title: "DoD & Federal",
    desc: "Cleared IT professionals for Department of Defense, IC, and civilian federal agency contracts.",
    tags: ["TS/SCI", "Secret", "Poly", "ITAR"],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#00D4AA]" />,
    title: "Financial Technology",
    desc: "Quantitative developers, fintech engineers, and risk modeling specialists.",
    tags: ["Fintech", "Quant", "RegTech", "SOX"],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-[#3B82F6]" />,
    title: "Healthcare IT",
    desc: "EHR developers, health data engineers, HIPAA compliance experts, and clinical informatics professionals.",
    tags: ["Epic", "HL7/FHIR", "HIPAA"],
  },
  {
    icon: <Lock className="w-6 h-6 text-[#E8280B]" />,
    title: "Cybersecurity",
    desc: "SOC analysts, penetration testers, zero-trust architects, and CISO-level support.",
    tags: ["SOC", "Pen Test", "Zero Trust", "CMMC"],
  },
];

/* ─── STATS ─── */
const stats = [
  { num: "500+", label: "Placements Per Year" },
  { num: "48hr", label: "Avg. Time-to-Submit" },
  { num: "95%", label: "Client Retention" },
  { num: "10+", label: "Years of Excellence" },
];

/* ─── PROCESS ─── */
const steps = [
  { num: "01", icon: <Target className="w-5 h-5" />, title: "Discovery", desc: "We learn your technical requirements, clearance needs, team culture, and timeline — not just the job description." },
  { num: "02", icon: <BrainCircuit className="w-5 h-5" />, title: "Targeted Search", desc: "Domain-specific recruiters activate vertical pipelines and networks to surface qualified candidates within 24 hours." },
  { num: "03", icon: <ClipboardList className="w-5 h-5" />, title: "Rigorous Vetting", desc: "Technical screens, behavioral interviews, clearance verification, and references — before you see a single resume." },
  { num: "04", icon: <Users className="w-5 h-5" />, title: "Seamless Onboarding", desc: "We manage offers, paperwork, and 90-day check-ins to ensure lasting success for you and your new hire." },
];

/* ─── WHY US ─── */
const whyItems = [
  { icon: <Target className="w-6 h-6 text-[#E8280B]" />, title: "Vertical Recruiters", desc: "Our recruiters have technical backgrounds and domain expertise. They ask the right questions and recognize qualified candidates." },
  { icon: <ShieldCheck className="w-6 h-6 text-[#FFAB00]" />, title: "Cleared Pipeline Ready", desc: "We maintain active relationships with 2,500+ cleared professionals, reducing time-to-fill on sensitive DoD programs." },
  { icon: <Zap className="w-6 h-6 text-[#F76B1C]" />, title: "48-Hour Submissions", desc: "Average 48-hour time-to-submit with complete vetting done. Speed is a standard at RA SOFT — not at the cost of quality." },
  { icon: <ClipboardList className="w-6 h-6 text-[#00D4AA]" />, title: "Compliance Built In", desc: "DCAA-compliant invoicing, competitive SCA wage rates, EEO/OFCCP adherence — built into our standard operations." },
  { icon: <Briefcase className="w-6 h-6 text-[#3B82F6]" />, title: "Contract, Perm, or Hybrid", desc: "Whether you need a contract augmentation today or a permanent team of 40 next quarter, we flex to match your hiring model." },
  { icon: <Users className="w-6 h-6 text-[#E8280B]" />, title: "Dedicated Account Teams", desc: "Every client gets a named account manager and recruiter pair. No call centers, no rotating contacts." },
];

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { quote: "RA SOFT filled three TS/SCI cloud architect positions in under two weeks. No other vendor came close without compromising quality. They're our go-to partner for cleared staffing.", name: "James M.", role: "Program Manager · Defense Prime Contractor", initials: "JM" },
  { quote: "Their healthcare IT team understood our Epic and HL7 implementation requirements on the first call. We stopped explaining the basics and got straight to actual requirements. Refreshing.", name: "Sarah R.", role: "VP of IT · Regional Health System", initials: "SR" },
  { quote: "We scaled our ML engineering team from 4 to 22 in a single quarter. The candidates were genuinely strong, the process was seamless, and the partnership feels like a long-term relationship.", name: "Kevin L.", role: "CTO · AI-First Fintech Company", initials: "KL" },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════ */
export default function Page() {
  const [bannerShow, setBannerShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const geminiRef = React.useRef<HTMLDivElement>(null);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  }

  const { scrollYProgress } = useScroll({
    target: geminiRef,
    offset: ["start end", "end start"],
  });

  const p0 = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const p1 = useTransform(scrollYProgress, [0, 0.8], [0.08, 1.2]);
  const p2 = useTransform(scrollYProgress, [0, 0.8], [0.06, 1.2]);
  const p3 = useTransform(scrollYProgress, [0, 0.8], [0.04, 1.2]);
  const p4 = useTransform(scrollYProgress, [0, 0.8], [0.02, 1.2]);

  return (
    <div className="bg-[#07090f] text-white min-h-screen">

      {/* ── TOP ANNOUNCEMENT BANNER ── */}
      {bannerShow && (
        <div className="px-4 py-2 bg-[#0b0e18] border-b border-white/[0.06]">
          <Banner
            variant="warning"
            size="sm"
            show={bannerShow}
            onHide={() => setBannerShow(false)}
            closable
            showShade
            icon={<Rocket className="w-4 h-4" />}
            title="Now accepting cleared staffing requests for Q2 2025 federal programs."
            action={
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline"
              >
                Submit requirements <ArrowRight className="w-3 h-3" />
              </a>
            }
          />
        </div>
      )}

      {/* ── STICKY NAV ── */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07090f]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-[5vw] h-[70px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white font-bold"
              style={{ clipPath: "polygon(0 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%)" }}
            >
              RA
            </div>
            <span className="font-heading text-xl tracking-[3px]">
              RA SOFT <span className="text-[#E8280B]">LLC</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {["Services", "Clearance", "Industries", "Why Us", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-white/50 hover:text-white transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center text-[#E8280B] border border-[#E8280B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase hover:bg-[#E8280B] hover:text-white transition-all"
              style={{ clipPath: "polygon(0 0,95% 0,100% 20%,100% 100%,5% 100%,0 80%)" }}
            >
              Get Talent
            </a>
            <button
              className="md:hidden text-white/60 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-[#0b0e18] px-[5vw] py-4 flex flex-col gap-3">
            {["Services", "Clearance", "Industries", "Why Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-white/60 hover:text-white py-2 border-b border-white/[0.04]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <HeroGeometric
          badge="IT Staffing & Workforce Solutions"
          title1="RA SOFT LLC"
          title2="Elite Tech Talent"
        />
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0b0e18] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-[5vw] py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-2 px-4">
              <div
                className="font-heading text-3xl md:text-4xl tracking-wide"
                dangerouslySetInnerHTML={{
                  __html: s.num.replace(/^(\d+)/, '<span style="color:#E8280B">$1</span>'),
                }}
              />
              <div className="text-xs text-white/40 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-[#E8280B] overflow-hidden py-3">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].flatMap(() =>
            ["ARTIFICIAL INTELLIGENCE", "CLOUD COMPUTING", "DOD PROGRAMS", "HEALTHCARE IT", "FINANCIAL TECHNOLOGY", "CYBERSECURITY", "TS/SCI CLEARED STAFFING", "DEVOPS & CLOUD"].map((t, i) => (
              <span key={`${t}-${i}`} className="font-heading text-sm tracking-[2px] text-white opacity-90 px-8 whitespace-nowrap">
                {t} <span className="opacity-40 mx-2">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-[5vw] bg-[#0b0e18]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            <span className="w-6 h-px bg-[#E8280B]" />
            Our Services
          </div>
          <h2 className="font-heading text-[clamp(32px,4vw,58px)] tracking-wide text-white mb-3">
            Specialized Staffing,<br />Zero Compromise
          </h2>
          <p className="text-sm text-white/40 max-w-md mb-14 font-light leading-relaxed">
            Every recruiter on our team understands the technology, compliance requirements, and culture of the role they're filling.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <li key={svc.title} className="min-h-[220px] list-none">
                <div className="relative h-full rounded-lg border border-white/[0.08] p-1 bg-[#0f1420]">
                  <GlowingEffect disabled={false} spread={30} borderWidth={1} proximity={60} />
                  <div className="relative h-full p-6 flex flex-col">
                    <div className="mb-4">{svc.icon}</div>
                    <h3 className="font-heading text-lg tracking-wide text-white mb-2">{svc.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed flex-1">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 text-white/30 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GEMINI SCROLL EFFECT ── */}
      <section ref={geminiRef} className="h-[300vh] bg-[#07090f]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-4xl mx-auto px-4">
            <GoogleGeminiEffect
              pathLengths={[p0, p1, p2, p3, p4]}
              title="Precision. Speed. Integrity."
              description="We connect elite IT talent with the organizations that need them most — fast, vetted, and compliance-ready."
            />
          </div>
        </div>
      </section>

      {/* ── CLEARANCE SECTION ── */}
      <section id="clearance" className="py-24 px-[5vw] bg-[#0f1420]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-[2px] uppercase px-4 py-2 mb-5">
                ⭐ Cleared Staffing Specialists
              </div>
              <h2 className="font-heading text-[clamp(28px,3.5vw,50px)] tracking-wide text-white mb-5">
                Security Clearance<br />Experts
              </h2>
              <p className="text-sm text-white/40 leading-relaxed mb-8 font-light">
                We maintain an active, pre-vetted pipeline of cleared professionals at all levels — ready to support your most sensitive federal programs without the months-long search.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Public Trust", sub: "MBI / NACLC", color: "bg-blue-500" },
                  { label: "Secret", sub: "Active & Eligible", color: "bg-green-500" },
                  { label: "Top Secret", sub: "SSBI", color: "bg-yellow-500" },
                  { label: "TS/SCI", sub: "Sensitive Comp. Info.", color: "bg-orange-500" },
                  { label: "CI Polygraph", sub: "Counter-Intel", color: "bg-red-500" },
                  { label: "Full Scope Poly", sub: "Lifestyle Poly", color: "bg-purple-500" },
                ].map((lv) => (
                  <div key={lv.label} className="flex items-center gap-3 bg-[#141a28] border border-white/[0.08] p-3 rounded">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${lv.color}`} />
                    <div>
                      <div className="text-xs font-semibold text-white">{lv.label}</div>
                      <div className="text-[10px] text-white/35">{lv.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="bg-[#141a28] border border-white/[0.08] p-10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 font-heading text-[100px] text-white/[0.02] leading-none select-none pointer-events-none">
                CLEARED
              </div>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {[
                  { lvl: "PUBLIC TRUST", sub: "Tier 2 / Tier 4", hl: false },
                  { lvl: "SECRET", sub: "Active Pipeline", hl: false },
                  { lvl: "TOP SECRET", sub: "SSBI Background", hl: false },
                  { lvl: "TS/SCI", sub: "Sensitive Comp.", hl: true },
                  { lvl: "CI POLY", sub: "Counter-Intel", hl: false },
                  { lvl: "FULL SCOPE", sub: "Lifestyle Polygraph", hl: false },
                ].map((b) => (
                  <div
                    key={b.lvl}
                    className={`p-4 text-center border ${b.hl ? "border-amber-500/30 bg-amber-500/5" : "border-white/[0.06] bg-[#0b0e18]"}`}
                  >
                    <span className={`font-heading text-base tracking-wide block mb-1 ${b.hl ? "text-amber-400" : "text-white"}`}>
                      {b.lvl}
                    </span>
                    <span className="text-[10px] text-white/30">{b.sub}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center relative z-10">
                <span className="font-heading text-3xl text-white">2,500+</span>
                <p className="text-xs text-white/35 mt-1">Active Cleared Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="py-24 px-[5vw] bg-[#07090f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            <span className="w-6 h-px bg-[#E8280B]" />
            Industries We Serve
          </div>
          <h2 className="font-heading text-[clamp(32px,4vw,58px)] tracking-wide text-white mb-3">
            Deep Domain<br />Expertise
          </h2>
          <p className="text-sm text-white/40 max-w-md mb-14 font-light leading-relaxed">
            Our recruiters specialize by vertical — not by job title. Every candidate we submit already understands your industry's compliance, tools, and culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Defense & IC", desc: "Supporting DoD, DHS, NSA, CIA, and prime/sub contractors with cleared IT talent across all programs.", color: "#E8280B" },
              { num: "02", title: "Federal Civilian", desc: "Modernization and digital transformation staffing for civilian agencies: HHS, Treasury, DHS, and more.", color: "#F76B1C" },
              { num: "03", title: "Financial Services", desc: "Banks, hedge funds, insurance firms, and fintech companies seeking tech talent with regulatory awareness.", color: "#FFAB00" },
              { num: "04", title: "Healthcare & Life Sciences", desc: "Hospitals, health systems, pharma, and biotech companies requiring HIPAA-savvy IT professionals.", color: "#00D4AA" },
              { num: "05", title: "Energy & Utilities", desc: "Critical infrastructure protection, SCADA systems, and operational technology staffing.", color: "#3B82F6" },
              { num: "06", title: "Telecommunications", desc: "Network engineers, 5G architects, and software professionals for the world's connectivity backbone.", color: "#E8280B" },
            ].map((ind) => (
              <div
                key={ind.num}
                className="group bg-[#0b0e18] border border-white/[0.06] p-7 hover:border-white/[0.12] hover:-translate-y-1 transition-all relative overflow-hidden"
              >
                <div
                  className="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full transition-all duration-300"
                  style={{ background: ind.color }}
                />
                <div className="font-heading text-4xl text-white/[0.06] mb-3 leading-none">{ind.num}</div>
                <h3 className="font-heading text-xl tracking-wide text-white mb-2">{ind.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-[5vw] bg-[#0b0e18]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            <span className="w-6 h-px bg-[#E8280B]" />
            Our Process
          </div>
          <h2 className="font-heading text-[clamp(32px,4vw,58px)] tracking-wide text-white mb-14">
            From Requirements<br />to Day One
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {steps.map((step, i) => (
              <div key={step.num} className="bg-[#0b0e18] p-7">
                <div
                  className="w-14 h-14 bg-[#07090f] border border-white/[0.1] flex items-center justify-center font-heading text-lg text-[#E8280B] mb-6"
                  style={{ clipPath: "polygon(0 0,85% 0,100% 15%,100% 100%,15% 100%,0 85%)" }}
                >
                  {step.num}
                </div>
                <h3 className="font-heading text-lg tracking-wide text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="py-24 px-[5vw] bg-[#07090f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            <span className="w-6 h-px bg-[#E8280B]" />
            Why RA SOFT LLC
          </div>
          <h2 className="font-heading text-[clamp(32px,4vw,58px)] tracking-wide text-white mb-14">
            The Partner Your<br />Mission Deserves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-[#07090f] hover:bg-[#0b0e18] transition-colors p-9">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl tracking-wide text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-[5vw] bg-[#0b0e18]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            <span className="w-6 h-px bg-[#E8280B]" />
            Client Stories
          </div>
          <h2 className="font-heading text-[clamp(32px,4vw,58px)] tracking-wide text-white mb-14">
            Trusted by Teams<br />That Cannot Settle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#0f1420] border border-white/[0.08] p-8 relative">
                <span className="absolute top-4 left-5 font-serif text-7xl text-[#E8280B] opacity-15 leading-none select-none">"</span>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#FFAB00] fill-[#FFAB00]" />
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-6 pt-3">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div
                    className="w-10 h-10 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white flex-shrink-0"
                    style={{ clipPath: "polygon(0 0,85% 0,100% 15%,100% 100%,15% 100%,0 85%)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-white/35 tracking-wide">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-[5vw] bg-[#07090f]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
              <span className="w-6 h-px bg-[#E8280B]" />
              Let's Work Together
            </div>
            <h2 className="font-heading text-[clamp(28px,3.5vw,52px)] tracking-wide text-white mb-4">
              Tell Us What<br />You Need
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-10 font-light max-w-sm">
              Whether you need a single cleared architect or a team of 60 cloud engineers, RA SOFT LLC is ready to mobilize. A specialist will respond within one business day.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { icon: "📧", label: "Email", val: "talent@rasoftllc.com" },
                { icon: "📞", label: "Phone", val: "(720) 560-3742" },
                { icon: "📍", label: "Headquarters", val: "Laurel, Maryland, USA" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4 py-5 border-b border-white/[0.06]">
                  <div className="w-10 h-10 bg-[#141a28] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-[1px] mb-1">{info.label}</div>
                    <div className="text-sm text-white font-medium">{info.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0b0e18] border border-white/[0.1] p-10">
            <h3 className="font-heading text-2xl tracking-wide text-white mb-7">Request Talent</h3>
            {formSubmitted ? (
              <div className="rounded border border-green-500/30 bg-green-500/10 p-8 text-center text-green-300">
                <div className="text-3xl mb-3">✅</div>
                <p className="font-semibold text-lg">Request Submitted!</p>
                <p className="text-sm text-green-400/70 mt-2">A specialist will respond within 1 business day.</p>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">First Name</label>
                  <input className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Last Name</label>
                  <input className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Work Email</label>
                <input type="email" className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="you@agency.gov" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Company / Agency</label>
                <input className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="Acme Corp" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Service Area</label>
                  <select className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors">
                    <option value="">Select area...</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud & DevOps</option>
                    <option>DoD / Cleared Staffing</option>
                    <option>Financial Technology</option>
                    <option>Healthcare IT</option>
                    <option>Cybersecurity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Clearance Level</label>
                  <select className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors">
                    <option value="">Select level...</option>
                    <option>Public Trust</option>
                    <option>Secret</option>
                    <option>Top Secret</option>
                    <option>TS/SCI</option>
                    <option>CI Polygraph</option>
                    <option>Full Scope Poly</option>
                    <option>Not Required</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Tell Us About Your Need</label>
                <textarea rows={4} className="w-full px-3 py-3 bg-[#141a28] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors resize-none" placeholder="Describe your requirements..." />
              </div>
              <button
                type="submit"
                disabled={formLoading}
                className="w-full py-4 bg-[#E8280B] text-white font-heading text-lg tracking-[2px] hover:bg-[#ff4422] disabled:opacity-60 transition-colors mt-2"
                style={{ clipPath: "polygon(0 0,97% 0,100% 30%,100% 100%,3% 100%,0 70%)" }}
              >
                {formLoading ? "SUBMITTING..." : "SUBMIT REQUEST →"}
              </button>
              <p className="text-[11px] text-white/25 text-center">A specialist will respond within 1 business day.</p>
            </form>
            )}
          </div>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
