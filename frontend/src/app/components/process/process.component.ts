import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#0b0e18]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
          <span class="w-6 h-px bg-[#E8280B]"></span> Our Process
        </div>
        <h2 class="font-heading text-white mb-14 tracking-wide" style="font-size:clamp(32px,4vw,58px)">From Requirements<br>to Day One</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          @for (step of steps; track step.num) {
            <div class="bg-[#0b0e18] p-7">
              <div class="w-14 h-14 bg-[#07090f] border border-white/[0.10] flex items-center justify-center font-heading text-lg text-[#E8280B] mb-6"
                   style="clip-path:polygon(0 0,85% 0,100% 15%,100% 100%,15% 100%,0 85%)">{{step.num}}</div>
              <h3 class="font-heading text-lg tracking-wide text-white mb-2">{{step.title}}</h3>
              <p class="text-xs text-white/40 leading-relaxed">{{step.desc}}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent {
  steps = [
    { num:'01', title:'Discovery', desc:'We learn your technical requirements, clearance needs, team culture, and timeline — not just the job description.' },
    { num:'02', title:'Targeted Search', desc:'Domain-specific recruiters activate vertical pipelines and networks to surface qualified candidates within 24 hours.' },
    { num:'03', title:'Rigorous Vetting', desc:'Technical screens, behavioral interviews, clearance verification, and references — before you see a single resume.' },
    { num:'04', title:'Seamless Onboarding', desc:'We manage offers, paperwork, and 90-day check-ins to ensure lasting success for you and your new hire.' },
  ];
}
