import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gemini-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section #scrollSection class="bg-[#07090f] py-32">
      <div class="sticky-container max-w-4xl mx-auto px-4 text-center">
        <h2 class="font-heading text-[clamp(28px,4vw,56px)] tracking-widest text-white font-normal mb-4">
          Precision. Speed. Integrity.
        </h2>
        <p class="text-sm text-white/50 font-light max-w-lg mx-auto mb-10">
          We connect elite IT talent with the organizations that need them most — fast, vetted, and compliance-ready.
        </p>
        <svg width="100%" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
          <!-- Glow paths -->
          <path d="M0 200 C250 100 500 300 750 150 S1000 200 1000 200" stroke="#E8280B" stroke-width="3" stroke-opacity="0.12" fill="none" filter="url(#gblur)"/>
          <path d="M0 220 C250 120 500 320 750 170 S1000 220 1000 220" stroke="#F76B1C" stroke-width="3" stroke-opacity="0.10" fill="none" filter="url(#gblur)"/>
          <path d="M0 180 C250 80 500 280 750 130 S1000 180 1000 180" stroke="#FFAB00" stroke-width="3" stroke-opacity="0.10" fill="none" filter="url(#gblur)"/>
          <!-- Animated foreground paths -->
          @for (path of paths; track path.id) {
            <path [attr.d]="path.d" [attr.stroke]="path.stroke" [attr.stroke-width]="path.sw"
                  [attr.stroke-opacity]="path.opacity" fill="none"
                  stroke-linecap="round"
                  [attr.stroke-dasharray]="path.length"
                  [attr.stroke-dashoffset]="getOffset(path.id)"/>
          }
          <defs>
            <filter id="gblur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  `,
})
export class GeminiScrollComponent implements OnInit, OnDestroy {
  progress = 0;
  pathLength = 1200;

  paths = [
    { id:0, d:'M0 200 C250 100 500 300 750 150 S1000 200 1000 200', stroke:'#E8280B', sw:'2', opacity:'0.85', length:1200 },
    { id:1, d:'M0 220 C250 120 500 320 750 170 S1000 220 1000 220', stroke:'#F76B1C', sw:'2', opacity:'0.75', length:1200 },
    { id:2, d:'M0 180 C250 80 500 280 750 130 S1000 180 1000 180', stroke:'#FFAB00', sw:'2', opacity:'0.65', length:1200 },
    { id:3, d:'M0 240 C250 140 500 340 750 190 S1000 240 1000 240', stroke:'#E8280B', sw:'1.5', opacity:'0.50', length:1200 },
    { id:4, d:'M0 160 C250 60 500 260 750 110 S1000 160 1000 160', stroke:'#F76B1C', sw:'1.5', opacity:'0.50', length:1200 },
  ];

  private onScroll = () => {
    const el = this.elRef.nativeElement;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = el.offsetHeight - vh;
    const scrolled = -rect.top;
    this.progress = Math.max(0, Math.min(1, scrolled / total));
  };

  constructor(private elRef: ElementRef) {}

  ngOnInit() { window.addEventListener('scroll', this.onScroll, { passive: true }); }
  ngOnDestroy() { window.removeEventListener('scroll', this.onScroll); }

  getOffset(id: number): number {
    const delays = [0, 0.05, 0.08, 0.1, 0.12];
    const adjusted = Math.max(0, Math.min(1, (this.progress - delays[id]) / 0.8));
    return this.pathLength * (1 - adjusted * 1.2);
  }
}
