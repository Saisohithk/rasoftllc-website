import { Directive, ElementRef, Input, OnInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '[appGlowingEffect]',
  standalone: true,
})
export class GlowingEffectDirective implements OnInit, OnDestroy {
  @Input() glowDisabled = false;
  @Input() glowSpread = 20;
  @Input() glowProximity = 60;

  private glowEl!: HTMLDivElement;
  private trackerEl!: HTMLDivElement;
  private lastPos = { x: 0, y: 0 };
  private rafId = 0;
  private handlePointerMove!: (e: PointerEvent) => void;
  private handleScroll!: () => void;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnInit() {
    if (this.glowDisabled) return;
    const host = this.el.nativeElement;
    host.style.position = 'relative';

    this.trackerEl = document.createElement('div');
    this.trackerEl.style.cssText = 'pointer-events:none;position:absolute;inset:0;border-radius:inherit;';
    host.prepend(this.trackerEl);

    this.glowEl = document.createElement('div');
    this.glowEl.style.cssText = `
      pointer-events:none;position:absolute;inset:0;border-radius:inherit;
      opacity:0;transition:opacity 0.3s;
      background:radial-gradient(circle at center,rgba(232,40,11,0.5),rgba(247,107,28,0.3),transparent 70%);
    `;
    host.appendChild(this.glowEl);

    this.zone.runOutsideAngular(() => {
      this.handlePointerMove = (e) => this.onMove(e.clientX, e.clientY);
      this.handleScroll = () => this.onMove(this.lastPos.x, this.lastPos.y);
      document.body.addEventListener('pointermove', this.handlePointerMove, { passive: true });
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    });
  }

  private onMove(x: number, y: number) {
    this.lastPos = { x, y };
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      const { left, top, width, height } = this.el.nativeElement.getBoundingClientRect();
      const isActive =
        x > left - this.glowProximity &&
        x < left + width + this.glowProximity &&
        y > top - this.glowProximity &&
        y < top + height + this.glowProximity;

      const relX = ((x - left) / width) * 100;
      const relY = ((y - top) / height) * 100;

      this.glowEl.style.opacity = isActive ? '1' : '0';
      this.glowEl.style.background = `radial-gradient(circle at ${relX}% ${relY}%, rgba(232,40,11,0.4), rgba(247,107,28,0.2), transparent 70%)`;
    });
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    document.body.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('scroll', this.handleScroll);
  }
}
