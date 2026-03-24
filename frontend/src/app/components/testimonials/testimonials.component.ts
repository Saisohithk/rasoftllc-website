import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#0b0e18]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
          <span class="w-6 h-px bg-[#E8280B]"></span> Client Stories
        </div>
        <h2 class="font-heading text-white mb-14 tracking-wide" style="font-size:clamp(32px,4vw,58px)">Trusted by Teams<br>That Cannot Settle</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          @for (t of testimonials; track t.name) {
            <div class="bg-[#0f1420] border border-white/[0.08] p-8 relative">
              <span class="absolute top-4 left-5 font-serif text-7xl text-[#E8280B] opacity-15 leading-none select-none">"</span>
              <div class="flex mb-3">
                @for (star of [1,2,3,4,5]; track star) {
                  <span class="text-[#FFAB00] text-sm">★</span>
                }
              </div>
              <p class="text-sm text-white/70 leading-relaxed mb-6 pt-3">{{t.quote}}</p>
              <div class="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div class="w-10 h-10 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white flex-shrink-0"
                     style="clip-path:polygon(0 0,85% 0,100% 15%,100% 100%,15% 100%,0 85%)">{{t.initials}}</div>
                <div>
                  <div class="text-sm font-semibold text-white">{{t.name}}</div>
                  <div class="text-[11px] text-white/35 tracking-wide">{{t.role}}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  testimonials = [
    { quote:'RA SOFT filled three TS/SCI cloud architect positions in under two weeks. No other vendor came close without compromising quality. They\'re our go-to partner for cleared staffing.', name:'James M.', role:'Program Manager · Defense Prime Contractor', initials:'JM' },
    { quote:'Their healthcare IT team understood our Epic and HL7 implementation requirements on the first call. We stopped explaining the basics and got straight to actual requirements. Refreshing.', name:'Sarah R.', role:'VP of IT · Regional Health System', initials:'SR' },
    { quote:'We scaled our ML engineering team from 4 to 22 in a single quarter. The candidates were genuinely strong, the process was seamless, and the partnership feels like a long-term relationship.', name:'Kevin L.', role:'CTO · AI-First Fintech Company', initials:'KL' },
  ];
}
