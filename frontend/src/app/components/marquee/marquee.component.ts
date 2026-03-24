import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#E8280B] overflow-hidden py-3">
      <div class="flex w-max animate-marquee">
        @for (item of items; track $index) {
          <span class="font-heading text-sm tracking-[2px] text-white opacity-90 px-8 whitespace-nowrap">{{item}} <span class="opacity-40 mx-2">✦</span></span>
        }
      </div>
    </div>
  `,
})
export class MarqueeComponent {
  items = [
    'ARTIFICIAL INTELLIGENCE','CLOUD COMPUTING','DOD PROGRAMS','HEALTHCARE IT',
    'FINANCIAL TECHNOLOGY','CYBERSECURITY','TS/SCI CLEARED STAFFING','DEVOPS & CLOUD',
    'ARTIFICIAL INTELLIGENCE','CLOUD COMPUTING','DOD PROGRAMS','HEALTHCARE IT',
    'FINANCIAL TECHNOLOGY','CYBERSECURITY','TS/SCI CLEARED STAFFING','DEVOPS & CLOUD',
  ];
}
