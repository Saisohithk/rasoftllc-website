import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#07090f]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
          <span class="w-6 h-px bg-[#E8280B]"></span> Why RA SOFT LLC
        </div>
        <h2 class="font-heading text-white mb-14 tracking-wide" style="font-size:clamp(32px,4vw,58px)">The Partner Your<br>Mission Deserves</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
          @for (item of items; track item.title) {
            <div class="bg-[#07090f] hover:bg-[#0b0e18] transition-colors p-9">
              <div class="text-2xl mb-4">{{item.emoji}}</div>
              <h3 class="font-heading text-xl tracking-wide text-white mb-2">{{item.title}}</h3>
              <p class="text-sm text-white/40 leading-relaxed">{{item.desc}}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class WhyUsComponent {
  items = [
    { emoji:'🎯', title:'Vertical Recruiters', desc:'Our recruiters have technical backgrounds and domain expertise. They ask the right questions and recognize qualified candidates.' },
    { emoji:'🛡️', title:'Cleared Pipeline Ready', desc:'We maintain active relationships with 2,500+ cleared professionals, reducing time-to-fill on sensitive DoD programs.' },
    { emoji:'⚡', title:'48-Hour Submissions', desc:'Average 48-hour time-to-submit with complete vetting done. Speed is a standard at RA SOFT — not at the cost of quality.' },
    { emoji:'📋', title:'Compliance Built In', desc:'DCAA-compliant invoicing, competitive SCA wage rates, EEO/OFCCP adherence — built into our standard operations.' },
    { emoji:'🔄', title:'Contract, Perm, or Hybrid', desc:'Whether you need a contract augmentation today or a permanent team of 40 next quarter, we flex to match your hiring model.' },
    { emoji:'🤝', title:'Dedicated Account Teams', desc:'Every client gets a named account manager and recruiter pair. No call centers, no rotating contacts.' },
  ];
}
