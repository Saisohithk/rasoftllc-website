import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#0b0e18] border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-[5vw] pt-16 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <a href="#" class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white font-bold"
                   style="clip-path:polygon(0 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%)">RA</div>
              <span class="font-heading text-xl tracking-[3px] text-white">RA SOFT <span class="text-[#E8280B]">LLC</span></span>
            </a>
            <p class="text-sm text-white/40 leading-relaxed max-w-[260px] font-light">
              Premier IT staffing and workforce solutions for federal, commercial, and cleared environments. Serving clients nationwide from the Washington D.C. metro area.
            </p>
            <div class="mt-6 flex flex-col gap-3">
              <div class="flex items-center gap-3 text-xs text-white/40">📧 talent&#64;rasoftllc.com</div>
              <div class="flex items-center gap-3 text-xs text-white/40">📞 (703) 555-0190</div>
              <div class="flex items-center gap-3 text-xs text-white/40">📍 Washington D.C. Metro Area</div>
            </div>
          </div>
          @for (col of footerCols; track col.label) {
            <div>
              <h4 class="font-heading text-sm tracking-[2px] text-white mb-5 uppercase">{{col.label}}</h4>
              <ul class="space-y-3">
                @for (link of col.links; track link.title) {
                  <li><a [href]="link.href" class="text-sm text-white/40 hover:text-white/80 transition-colors">{{link.title}}</a></li>
                }
              </ul>
            </div>
          }
        </div>
        <div class="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <span>© {{year}} RA SOFT LLC. All rights reserved.</span>
          <span>NAICS: 561320 · GSA Schedule · DCAA Compliant</span>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  footerCols = [
    { label:'Services', links:[
      { title:'AI & Machine Learning', href:'#services' },
      { title:'Cloud & DevOps', href:'#services' },
      { title:'DoD / Cleared Staffing', href:'#clearance' },
      { title:'Financial Technology', href:'#services' },
      { title:'Healthcare IT', href:'#services' },
      { title:'Cybersecurity', href:'#services' },
    ]},
    { label:'Company', links:[
      { title:'About Us', href:'#' },
      { title:'Leadership', href:'#' },
      { title:'Case Studies', href:'#' },
      { title:'Blog', href:'#' },
      { title:'Careers', href:'#' },
    ]},
    { label:'Connect', links:[
      { title:'Request Talent', href:'#contact' },
      { title:'Job Seekers', href:'#contact' },
      { title:'Partner With Us', href:'#contact' },
      { title:'LinkedIn', href:'#' },
      { title:'Privacy Policy', href:'#' },
    ]},
  ];
}
