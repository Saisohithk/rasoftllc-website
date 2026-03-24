import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (show()) {
      <div class="px-4 py-2 bg-[#0b0e18] border-b border-white/[0.06]">
        <div class="flex items-center justify-between gap-3 rounded-md border border-amber-500/25 bg-amber-500/10 py-1.5 px-3 text-sm text-amber-300">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-base flex-shrink-0">🚀</span>
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-blink inline-block"></span>
            <span class="font-semibold text-xs">Now accepting cleared staffing requests for Q2 2025 federal programs.</span>
          </div>
          <div class="flex items-center gap-3 flex-shrink-0">
            <a href="#contact" class="text-xs font-semibold text-amber-300 hover:underline">Submit requirements →</a>
            <button (click)="show.set(false)" class="opacity-50 hover:opacity-100 transition-opacity text-amber-300">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class BannerComponent {
  show = signal(true);
}
