'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Services',
    links: [
      { title: 'AI & Machine Learning', href: '#services' },
      { title: 'Cloud & DevOps', href: '#services' },
      { title: 'DoD / Cleared Staffing', href: '#clearance' },
      { title: 'Financial Technology', href: '#services' },
      { title: 'Healthcare IT', href: '#services' },
      { title: 'Cybersecurity', href: '#services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Leadership', href: '#' },
      { title: 'Case Studies', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Privacy Policy', href: '#' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'Request Talent', href: '#contact' },
      { title: 'Job Seekers', href: '#contact' },
      { title: 'Partner With Us', href: '#contact' },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0b0e18] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-[5vw] pt-16 pb-8">
        <AnimatedContainer>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white font-bold"
                  style={{ clipPath: 'polygon(0 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%)' }}
                >
                  RA
                </div>
                <span className="font-heading text-xl tracking-[3px] text-white">
                  RA SOFT <span className="text-[#E8280B]">LLC</span>
                </span>
              </a>
              <p className="text-sm text-white/40 leading-relaxed max-w-[260px] font-light">
                Premier IT staffing and workforce solutions for federal,
                commercial, and cleared environments. Serving clients nationwide
                from the Washington D.C. metro area.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <MailIcon className="w-3.5 h-3.5 text-[#E8280B]" />
                  talent@rasoftllc.com
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <PhoneIcon className="w-3.5 h-3.5 text-[#E8280B]" />
                  (703) 555-0190
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#E8280B]" />
                  Washington D.C. Metro Area
                </div>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((section) => (
              <div key={section.label}>
                <h4 className="font-heading text-sm tracking-[2px] text-white mb-5 uppercase">
                  {section.label}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white/80 transition-colors flex items-center gap-2"
                      >
                        {link.icon && <link.icon className="w-3.5 h-3.5" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
            <span>© {new Date().getFullYear()} RA SOFT LLC. All rights reserved.</span>
            <span>NAICS: 561320 · GSA Schedule · DCAA Compliant</span>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<'div'>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
