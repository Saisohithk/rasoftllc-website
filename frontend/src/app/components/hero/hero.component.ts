import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#07090f]">
      <div class="absolute inset-0 bg-gradient-to-br from-red-900/[0.07] via-transparent to-orange-900/[0.05] blur-3xl"></div>
      <div class="absolute inset-0" style="background-image:radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px);background-size:36px 36px;mask-image:radial-gradient(ellipse 70% 70% at 70% 40%,black 20%,transparent 75%)"></div>

      @for (shape of shapes; track shape.id) {
        <div class="absolute shape-enter" [style.top]="shape.top" [style.left]="shape.left" [style.right]="shape.right" [style.bottom]="shape.bottom" [style.animation-delay]="shape.delay">
          <div class="shape-bob" [style.width]="shape.w" [style.height]="shape.h" [style.animation-delay]="shape.bobDelay" style="animation-duration:12s">
            <div class="absolute inset-0 rounded-full" [style.background]="'linear-gradient(to right,' + shape.color + ',transparent)'" style="border:2px solid rgba(255,255,255,0.08);backdrop-filter:blur(2px)"></div>
          </div>
        </div>
      }

      <div class="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <div class="fade-up" style="animation-delay:0.3s">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8280B]/25 bg-[#E8280B]/10 text-[#ff4422] text-xs font-semibold tracking-[2px] uppercase mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[#E8280B] animate-blink"></span>
            IT Staffing &amp; Workforce Solutions
          </div>
        </div>
        <h1 class="fade-up font-heading text-white leading-none tracking-wide mb-6" style="font-size:clamp(56px,9vw,120px);animation-delay:0.45s">
          RA SOFT LLC<br>
          <span style="background:linear-gradient(to right,#E8280B,#F76B1C,#E8280B);-webkit-background-clip:text;background-clip:text;color:transparent">Elite Tech Talent</span>
        </h1>
        <p class="fade-up text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-10" style="font-size:clamp(15px,1.5vw,18px);animation-delay:0.6s">
          From AI engineers and cloud architects to TS/SCI-cleared defense professionals — we deliver qualified IT talent to federal agencies, financial institutions, and healthcare systems nationwide.
        </p>
        <div class="fade-up flex gap-4 justify-center flex-wrap" style="animation-delay:0.75s">
          <a href="#contact" class="px-8 py-3.5 bg-[#E8280B] text-white font-semibold text-sm tracking-wide hover:bg-[#ff4422] transition-colors" style="clip-path:polygon(0 0,96% 0,100% 25%,100% 100%,4% 100%,0 75%)">Request Talent →</a>
          <a href="#services" class="px-8 py-3.5 border border-white/15 text-white/80 font-medium text-sm tracking-wide hover:border-white/30 hover:bg-white/5 transition-all">Explore Services</a>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-[#07090f]/60 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-[5vw] py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          @for (stat of stats; track stat.label) {
            <div class="text-center px-4">
              <div class="font-heading text-3xl text-white tracking-wide"><span class="text-[#E8280B]">{{stat.numVal}}</span>{{stat.suffix}}</div>
              <div class="text-xs text-white/40 mt-1">{{stat.label}}</div>
            </div>
          }
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-[#07090f]/60 pointer-events-none"></div>
    </div>
  `,
})
export class HeroComponent {
  shapes = [
    { id:1, top:'-5%', left:'-5%', right:'auto', bottom:'auto', w:'600px', h:'140px', color:'rgba(232,40,11,0.12)', delay:'0.3s', bobDelay:'0s' },
    { id:2, top:'10%', left:'auto', right:'-5%', bottom:'auto', w:'500px', h:'120px', color:'rgba(247,107,28,0.10)', delay:'0.5s', bobDelay:'-3s' },
    { id:3, top:'auto', left:'10%', right:'auto', bottom:'20%', w:'300px', h:'80px', color:'rgba(255,100,100,0.08)', delay:'0.4s', bobDelay:'-6s' },
    { id:4, top:'auto', left:'auto', right:'15%', bottom:'30%', w:'200px', h:'60px', color:'rgba(255,171,0,0.08)', delay:'0.6s', bobDelay:'-2s' },
    { id:5, top:'45%', left:'25%', right:'auto', bottom:'auto', w:'150px', h:'40px', color:'rgba(232,40,11,0.06)', delay:'0.7s', bobDelay:'-8s' },
  ];
  stats = [
    { numVal:'500', suffix:'+', label:'Placements Per Year' },
    { numVal:'48', suffix:'hr', label:'Avg. Time-to-Submit' },
    { numVal:'95', suffix:'%', label:'Client Retention' },
    { numVal:'10', suffix:'+', label:'Years of Excellence' },
  ];
}
