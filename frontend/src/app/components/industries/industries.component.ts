import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#07090f]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4"><span class="w-6 h-px bg-[#E8280B]"></span>Industries We Serve</div>
        <h2 class="font-heading text-white mb-3 tracking-wide" style="font-size:clamp(32px,4vw,58px)">Deep Domain<br>Expertise</h2>
        <p class="text-sm text-white/40 max-w-md mb-14 font-light leading-relaxed">Our recruiters specialize by vertical — not by job title. Every candidate we submit already understands your industry's compliance, tools, and culture.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (ind of industries; track ind.num) {
            <div class="group bg-[#0b0e18] border border-white/[0.06] p-7 hover:border-white/[0.12] hover:-translate-y-1 transition-all relative overflow-hidden cursor-default">
              <div class="absolute left-0 top-0 w-[3px] h-0 group-hover:h-full transition-all duration-300" [style.background]="ind.color"></div>
              <div class="font-heading text-4xl text-white/[0.06] mb-3 leading-none">{{ind.num}}</div>
              <h3 class="font-heading text-xl tracking-wide text-white mb-2">{{ind.title}}</h3>
              <p class="text-xs text-white/40 leading-relaxed">{{ind.desc}}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class IndustriesComponent {
  industries = [
    { num:'01', title:'Defense & IC', desc:'Supporting DoD, DHS, NSA, CIA, and prime/sub contractors with cleared IT talent across all programs.', color:'#E8280B' },
    { num:'02', title:'Federal Civilian', desc:'Modernization and digital transformation staffing for civilian agencies: HHS, Treasury, DHS, and more.', color:'#F76B1C' },
    { num:'03', title:'Financial Services', desc:'Banks, hedge funds, insurance firms, and fintech companies seeking tech talent with regulatory awareness.', color:'#FFAB00' },
    { num:'04', title:'Healthcare & Life Sciences', desc:'Hospitals, health systems, pharma, and biotech companies requiring HIPAA-savvy IT professionals.', color:'#00D4AA' },
    { num:'05', title:'Energy & Utilities', desc:'Critical infrastructure protection, SCADA systems, and operational technology staffing.', color:'#3B82F6' },
    { num:'06', title:'Telecommunications', desc:"Network engineers, 5G architects, and software professionals for the world's connectivity backbone.", color:'#E8280B' },
  ];
}
