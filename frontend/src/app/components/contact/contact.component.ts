import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="py-24 px-[5vw] bg-[#07090f]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4"><span class="w-6 h-px bg-[#E8280B]"></span>Let's Work Together</div>
          <h2 class="font-heading text-white mb-4 tracking-wide" style="font-size:clamp(28px,3.5vw,52px)">Tell Us What<br>You Need</h2>
          <p class="text-sm text-white/40 leading-relaxed mb-10 font-light max-w-sm">Whether you need a single cleared architect or a team of 60 cloud engineers, RA SOFT LLC is ready to mobilize.</p>
          @for (info of infoItems; track info.label) {
            <div class="flex items-start gap-4 py-5 border-b border-white/[0.06]">
              <div class="w-10 h-10 bg-[#141a28] border border-white/[0.08] flex items-center justify-center text-base flex-shrink-0">{{info.icon}}</div>
              <div>
                <div class="text-[10px] text-white/30 uppercase tracking-[1px] mb-1">{{info.label}}</div>
                <div class="text-sm text-white font-medium">{{info.val}}</div>
              </div>
            </div>
          }
        </div>
        <div class="bg-[#0b0e18] border border-white/[0.10] p-10">
          <h3 class="font-heading text-2xl tracking-wide text-white mb-7">Request Talent</h3>
          @if (submitted()) {
            <div class="rounded border border-green-500/30 bg-green-500/10 p-8 text-center text-green-300">
              <div class="text-3xl mb-3">✅</div>
              <p class="font-semibold text-lg">Request Submitted!</p>
              <p class="text-sm text-green-400/70 mt-2">A specialist will respond within 1 business day.</p>
            </div>
          } @else {
            <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">First Name</label>
                  <input formControlName="firstName" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="John">
                </div>
                <div>
                  <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Last Name</label>
                  <input formControlName="lastName" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="Smith">
                </div>
              </div>
              <div>
                <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Work Email</label>
                <input formControlName="email" type="email" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="you&#64;agency.gov">
              </div>
              <div>
                <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Company / Agency</label>
                <input formControlName="company" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors" placeholder="Acme Corp">
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Service Area</label>
                  <select formControlName="serviceArea" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors">
                    <option value="">Select area...</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud & DevOps</option>
                    <option>DoD / Cleared Staffing</option>
                    <option>Financial Technology</option>
                    <option>Healthcare IT</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Clearance Level</label>
                  <select formControlName="clearanceLevel" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors">
                    <option value="">Select level...</option>
                    <option>Public Trust</option>
                    <option>Secret</option>
                    <option>Top Secret</option>
                    <option>TS/SCI</option>
                    <option>CI Polygraph</option>
                    <option>Full Scope Poly</option>
                    <option>Not Required</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-[10px] font-bold tracking-[1px] uppercase text-white/40 mb-2">Tell Us About Your Need</label>
                <textarea formControlName="message" rows="4" class="w-full px-3 py-3 bg-[#141a28] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#E8280B] transition-colors resize-none" placeholder="Describe your requirements..."></textarea>
              </div>
              <button type="submit" [disabled]="loading()" class="w-full py-4 bg-[#E8280B] text-white font-heading text-lg tracking-[2px] hover:bg-[#ff4422] disabled:opacity-60 transition-colors mt-2" style="clip-path:polygon(0 0,97% 0,100% 30%,100% 100%,3% 100%,0 70%)">
                {{loading() ? 'SUBMITTING...' : 'SUBMIT REQUEST →'}}
              </button>
              <p class="text-[11px] text-white/25 text-center">A specialist will respond within 1 business day.</p>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  submitted = signal(false);
  loading = signal(false);
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    serviceArea: [''],
    clearanceLevel: [''],
    message: [''],
  });
  infoItems = [
    { icon:'📧', label:'Email', val:'talent@rasoftllc.com' },
    { icon:'📞', label:'Phone', val:'(720) 560-3742' },
    { icon:'📍', label:'Headquarters', val:'Laurel, Maryland, USA' },
  ];
  constructor(private fb: FormBuilder, private contactService: ContactService) {}
  submit() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.contactService.submit(this.form.value as any).subscribe({
      next: () => { this.submitted.set(true); this.loading.set(false); },
      error: () => { this.loading.set(false); this.submitted.set(true); },
    });
  }
}
