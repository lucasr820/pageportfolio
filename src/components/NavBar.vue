<script setup>
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 60
  })
})

function openMenu() {
  isMobileMenuOpen.value = true
}

function closeMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav :class="{ scrolled: isScrolled }" aria-label="Navegação principal">
    <a href="#hero" class="nav-logo">WEBSOLUTIONS|<span>RB</span>.</a>
    <ul class="nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#processo">Processo</a></li>
      <li><a href="#precos">Preços</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#contato" class="nav-cta">Solicitar Orçamento</a></li>
    </ul>
    <button
      class="hamburger"
      @click="openMenu"
      :aria-expanded="isMobileMenuOpen"
      aria-label="Abrir menu"
    >
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div
    class="mobile-menu"
    :class="{ open: isMobileMenuOpen }"
    role="dialog"
    aria-modal="true"
    aria-label="Menu de navegação"
  >
    <button class="close-menu" @click="closeMenu" aria-label="Fechar menu">✕</button>
    <a href="#sobre" class="mobile-link" @click="closeMenu">Sobre</a>
    <a href="#servicos" class="mobile-link" @click="closeMenu">Serviços</a>
    <a href="#portfolio" class="mobile-link" @click="closeMenu">Portfólio</a>
    <a href="#processo" class="mobile-link" @click="closeMenu">Processo</a>
    <a href="#precos" class="mobile-link" @click="closeMenu">Preços</a>
    <a href="#faq" class="mobile-link" @click="closeMenu">FAQ</a>
    <a href="#contato" class="mobile-link" @click="closeMenu">Contato</a>
  </div>
</template>
