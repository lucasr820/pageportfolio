<script setup>
import { useScrollReveal } from './composables/useScrollReveal.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import PricingSection from './components/PricingSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import DifferentialsSection from './components/DifferentialsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FAQSection from './components/FAQSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

useScrollReveal()
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <PricingSection />
    <ProcessSection />
    <DifferentialsSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </main>
  <WhatsAppButton />
  <FooterSection />
</template>
