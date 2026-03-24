import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { ServicesComponent } from './components/services/services.component';
import { GeminiScrollComponent } from './components/gemini-scroll/gemini-scroll.component';
import { ClearanceComponent } from './components/clearance/clearance.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProcessComponent } from './components/process/process.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BannerComponent,
    HeroComponent,
    MarqueeComponent,
    ServicesComponent,
    GeminiScrollComponent,
    ClearanceComponent,
    IndustriesComponent,
    ProcessComponent,
    WhyUsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <section id="hero"><app-hero /></section>
    <app-marquee />
    <section id="services"><app-services /></section>
    <app-gemini-scroll />
    <section id="clearance"><app-clearance /></section>
    <section id="industries"><app-industries /></section>
    <section id="process"><app-process /></section>
    <section id="why-us"><app-why-us /></section>
    <section id="testimonials"><app-testimonials /></section>
    <section id="contact"><app-contact /></section>
    <app-footer />
  `,
})
export class AppComponent {}
