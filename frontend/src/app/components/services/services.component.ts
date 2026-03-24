import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlowingEffectDirective } from '../../directives/glowing-effect.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, GlowingEffectDirective],
  template: `
    <section class="py-24 px-[5vw] bg-[#0b0e18]">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 text-[#E8280B] text-xs font-bold tracking-[2.5px] uppercase mb-4">
          <span class="w-6 h-px bg-[#E8280B]"></span> Our Services
        </div>
        <h2 class="font-heading text-white mb-3 tracking-wide" style="font-size:clamp(32px,4vw,58px)">
          Specialized Staffing,<br>Zero Compromise
        </h2>
        <p class="text-sm text-white/40 max-w-md mb-14 font-light leading-relaxed">
          Every recruiter on our team understands the technology, compliance requirements, and culture of the role they're filling.
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (svc of services; track svc.title) {
            <li class="min-h-[220px] list-none">
              <div appGlowingEffect [glowDisabled]="false" [glowSpread]="30" [glowProximity]="60"
                   class="relative h-full rounded-lg border border-white/[0.08] p-1 bg-[#0f1420]">
                <div class="relative h-full p-6 flex flex-col">
                  <div class="text-2xl mb-4">{{svc.emoji}}</div>
                  <h3 class="font-heading text-lg tracking-wide text-white mb-2">{{svc.title}}</h3>
                  <p class="text-xs text-white/40 leading-relaxed flex-1">{{svc.desc}}</p>
                  <div class="flex flex-wrap gap-1.5 mt-4">
                    @for (tag of svc.tags; track tag) {
                      <span class="text-[10px] bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 text-white/30 rounded-sm">{{tag}}</span>
                    }
                  </div>
                </div>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  services = [
    { emoji:'🤖', title:'AI & Machine Learning', desc:'ML engineers, LLM architects, data scientists, and MLOps specialists for AI-driven transformation programs.', tags:['LLMs','PyTorch','MLOps','NLP'] },
    { emoji:'☁️', title:'Cloud & DevOps', desc:'AWS, Azure, GCP architects and DevSecOps professionals to build and scale critical infrastructure.', tags:['AWS','Azure','Kubernetes','Terraform'] },
    { emoji:'🏛️', title:'DoD & Federal', desc:'Cleared IT professionals for Department of Defense, IC, and civilian federal agency contracts.', tags:['TS/SCI','Secret','Poly','ITAR'] },
    { emoji:'💳', title:'Financial Technology', desc:'Quantitative developers, fintech engineers, and risk modeling specialists.', tags:['Fintech','Quant','RegTech','SOX'] },
    { emoji:'🏥', title:'Healthcare IT', desc:'EHR developers, health data engineers, HIPAA compliance experts, and clinical informatics professionals.', tags:['Epic','HL7/FHIR','HIPAA'] },
    { emoji:'🔒', title:'Cybersecurity', desc:'SOC analysts, penetration testers, zero-trust architects, and CISO-level support.', tags:['SOC','Pen Test','Zero Trust','CMMC'] },
  ];
}
