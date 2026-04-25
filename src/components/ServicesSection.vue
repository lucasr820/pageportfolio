<script setup>
const services = [
  {
    num: '01',
    icon: 'fa-solid fa-building',
    title: 'Site Institucional',
    desc: 'Site completo para apresentar sua empresa, serviços e conquistar a confiança dos seus clientes online.',
    delay: ''
  },
  {
    num: '02',
    icon: 'fa-solid fa-rocket',
    title: 'Landing Page',
    desc: 'Página focada em conversão para captar leads, vender produtos ou divulgar um serviço específico.',
    delay: 'reveal-delay-1'
  },
  {
    num: '03',
    icon: 'fa-solid fa-store',
    title: 'Sites para Negócios Locais',
    desc: 'Restaurantes, clínicas, salões, lojas — presença digital profissional para atrair clientes da sua região.',
    delay: 'reveal-delay-2'
  },
  {
    num: '04',
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Otimização SEO',
    desc: 'Configuração de SEO básico para que seu site apareça no Google e seja encontrado pelos seus clientes.',
    delay: ''
  },
  {
    num: '05',
    icon: 'fa-solid fa-mobile-screen',
    title: 'Design Responsivo',
    desc: 'Todos os sites são desenvolvidos mobile-first — perfeitos em celulares, tablets e computadores.',
    delay: 'reveal-delay-1'
  },
  {
    num: '06',
    icon: 'fa-solid fa-pen-ruler',
    title: 'Redesign de Sites',
    desc: 'Modernize seu site antigo com um visual renovado, mais rápido e alinhado com as tendências atuais.',
    delay: 'reveal-delay-2'
  }
]
</script>

<template>
  <section id="servicos" aria-labelledby="servicos-titulo">
    <div class="servicos-header reveal">
      <div>
        <div class="section-label">Serviços</div>
        <h2 id="servicos-titulo" class="section-title">O que posso<br><em>fazer por você</em></h2>
      </div>
      <a href="#contato" class="btn-primary">Solicitar orçamento <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    </div>
    <div class="servicos-grid">
      <div
        v-for="service in services"
        :key="service.num"
        class="servico-card reveal"
        :class="service.delay"
      >
        <div class="servico-num" aria-hidden="true">{{ service.num }}</div>
        <div class="servico-icon"><i :class="service.icon" aria-hidden="true"></i></div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>
