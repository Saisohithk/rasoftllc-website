import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-28 px-[5vw] bg-[#0b0e18] text-center relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 700px 400px at 50% 50%,rgba(232,40,11,0.08),transparent)"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="font-heading text-white leading-none mb-4 tracking-wide" style="font-size:clamp(42px,6vw,86px)">
          Your Next Critical<br><span class="text-[#E8280B]">Hire</span> is in Our<br>Network.
        </h2>
        <p class="text-sm text-white/40 max-w-sm mx-auto mb-10 font-light">
          Stop waiting months to fill mission-critical roles. Let RA SOFT LLC show you what fast, quality IT staffing actually looks like.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="#contact"
             class="inline-flex items-center gap-2 px-8 py-4 bg-[#E8280B] text-white font-semibold text-sm tracking-wide hover:bg-[#ff4422] transition-colors"
             style="clip-path:polygon(0 0,96% 0,100% 25%,100% 100%,4% 100%,0 75%)">
            Get Started Today →
          </a>
          <a href="tel:7035550190"
             class="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-all">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {}
