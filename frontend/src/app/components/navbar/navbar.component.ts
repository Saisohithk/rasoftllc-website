import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07090f]/90 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-[5vw] h-[70px] flex items-center justify-between">
        <a href="#" class="flex items-center gap-3">
          <div class="w-9 h-9 bg-[#E8280B] flex items-center justify-center font-heading text-sm text-white font-bold"
               style="clip-path:polygon(0 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%)">RA</div>
          <span class="font-heading text-xl tracking-[3px]">RA SOFT <span class="text-[#E8280B]">LLC</span></span>
        </a>
        <ul class="hidden md:flex gap-8 list-none">
          @for (item of navLinks; track item.id) {
            <li><a [href]="item.href" class="text-sm text-white/50 hover:text-white transition-colors font-medium">{{item.label}}</a></li>
          }
        </ul>
        <div class="flex items-center gap-4">
          <a href="#contact" class="hidden md:inline-flex items-center text-[#E8280B] border border-[#E8280B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase hover:bg-[#E8280B] hover:text-white transition-all"
             style="clip-path:polygon(0 0,95% 0,100% 20%,100% 100%,5% 100%,0 80%)">Get Talent</a>
          <button class="md:hidden text-white/60 hover:text-white" (click)="mobileOpen.set(!mobileOpen())">
            @if (mobileOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            } @else {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>
      @if (mobileOpen()) {
        <div class="md:hidden border-t border-white/[0.06] bg-[#0b0e18] px-[5vw] py-4 flex flex-col gap-3">
          @for (item of navLinks; track item.id) {
            <a [href]="item.href" class="text-sm text-white/60 hover:text-white py-2 border-b border-white/[0.04]" (click)="mobileOpen.set(false)">{{item.label}}</a>
          }
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  mobileOpen = signal(false);
  navLinks = [
    { id: 1, label: 'Services', href: '#services' },
    { id: 2, label: 'Clearance', href: '#clearance' },
    { id: 3, label: 'Industries', href: '#industries' },
    { id: 4, label: 'Why Us', href: '#why-us' },
    { id: 5, label: 'Contact', href: '#contact' },
  ];
}
