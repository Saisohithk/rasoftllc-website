import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-limelight-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="relative flex h-14 items-center rounded-full border border-white/10 bg-[#0b0e18]/90 backdrop-blur-xl px-2">
      @for (item of items; track item.id; let i = $index) {
        <button #navBtn
          class="relative z-20 flex h-full cursor-pointer items-center justify-center px-5 transition-all"
          (click)="setActive(i)"
          [attr.aria-label]="item.label">
          <span class="text-lg transition-all duration-200" [class]="activeIndex() === i ? 'opacity-100' : 'opacity-35'">{{item.emoji}}</span>
          <span class="ml-2 text-xs font-medium transition-all duration-200 hidden sm:block"
                [class]="activeIndex() === i ? 'text-white' : 'text-white/40'">{{item.label}}</span>
        </button>
      }
      <!-- Limelight indicator -->
      <div #limelight
           class="absolute top-0 h-[2px] w-16 rounded-full bg-[#E8280B] transition-all duration-300"
           style="box-shadow: 0 0 12px #E8280B">
        <div class="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#E8280B]/15 to-transparent rounded-b-full"></div>
      </div>
    </nav>
  `,
})
export class LimelightNavComponent implements AfterViewInit {
  activeIndex = signal(0);
  @ViewChildren('navBtn') navBtns!: QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChild('limelight') limelightEl!: ElementRef<HTMLDivElement>;

  items = [
    { id:'home', emoji:'🏠', label:'Home' },
    { id:'services', emoji:'💼', label:'Services' },
    { id:'contact', emoji:'📞', label:'Contact' },
  ];

  ngAfterViewInit() { setTimeout(() => this.updateLimelight(), 50); }

  setActive(index: number) {
    this.activeIndex.set(index);
    setTimeout(() => this.updateLimelight(), 0);
    const sections = ['hero','services','contact'];
    document.getElementById(sections[index])?.scrollIntoView({ behavior:'smooth' });
  }

  private updateLimelight() {
    const btns = this.navBtns.toArray();
    const btn = btns[this.activeIndex()]?.nativeElement;
    const light = this.limelightEl?.nativeElement;
    if (btn && light) {
      const left = btn.offsetLeft + btn.offsetWidth / 2 - light.offsetWidth / 2;
      light.style.left = `${left}px`;
    }
  }
}
