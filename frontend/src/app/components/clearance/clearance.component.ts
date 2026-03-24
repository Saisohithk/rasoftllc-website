import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clearance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#0f1420]">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-[2px] uppercase px-4 py-2 mb-5">
              ⭐ Cleared Staffing Specialists
            </div>
            <h2 class="font-heading text-white mb-5 tracking-wide" style="font-size:clamp(28px,3.5vw,50px)">
              Security Clearance<br>Experts
            </h2>
            <p class="text-sm text-white/40 leading-relaxed mb-8 font-light">
              We maintain an active, pre-vetted pipeline of cleared professionals at all levels — ready to support your most sensitive federal programs without the months-long search.
            </p>
            <div class="grid grid-cols-2 gap-3">
              @for (lv of levels; track lv.label) {
                <div class="flex items-center gap-3 bg-[#141a28] border border-white/[0.08] p-3 rounded">
                  <span class="w-2 h-2 rounded-full flex-shrink-0" [style.background]="lv.color"></span>
                  <div>
                    <div class="text-xs font-semibold text-white">{{lv.label}}</div>
                    <div class="text-[10px] text-white/35">{{lv.sub}}</div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="bg-[#141a28] border border-white/[0.08] p-10 relative overflow-hidden">
            <div class="absolute bottom-0 right-0 font-heading text-[100px] text-white/[0.02] leading-none select-none pointer-events-none">CLEARED</div>
            <div class="grid grid-cols-2 gap-3 relative z-10">
              @for (b of badges; track b.lvl) {
                <div class="p-4 text-center border" [class]="b.hl ? 'border-amber-500/30 bg-amber-500/5' : 'border-white/[0.06] bg-[#0b0e18]'">
                  <span class="font-heading text-base tracking-wide block mb-1" [class]="b.hl ? 'text-amber-400' : 'text-white'">{{b.lvl}}</span>
                  <span class="text-[10px] text-white/30">{{b.sub}}</span>
                </div>
              }
            </div>
            <div class="mt-6 text-center relative z-10">
              <span class="font-heading text-3xl text-white">2,500+</span>
              <p class="text-xs text-white/35 mt-1">Active Cleared Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ClearanceComponent {
  levels = [
    { label:'Public Trust', sub:'MBI / NACLC', color:'#3B82F6' },
    { label:'Secret', sub:'Active & Eligible', color:'#22C55E' },
    { label:'Top Secret', sub:'SSBI', color:'#EAB308' },
    { label:'TS/SCI', sub:'Sensitive Comp. Info.', color:'#F97316' },
    { label:'CI Polygraph', sub:'Counter-Intel', color:'#EF4444' },
    { label:'Full Scope Poly', sub:'Lifestyle Poly', color:'#A855F7' },
  ];
  badges = [
    { lvl:'PUBLIC TRUST', sub:'Tier 2 / Tier 4', hl:false },
    { lvl:'SECRET', sub:'Active Pipeline', hl:false },
    { lvl:'TOP SECRET', sub:'SSBI Background', hl:false },
    { lvl:'TS/SCI', sub:'Sensitive Comp.', hl:true },
    { lvl:'CI POLY', sub:'Counter-Intel', hl:false },
    { lvl:'FULL SCOPE', sub:'Lifestyle Polygraph', hl:false },
  ];
}
