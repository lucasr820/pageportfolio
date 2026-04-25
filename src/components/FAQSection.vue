<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = [
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Depende do escopo. Landing pages ficam prontas em até 5 dias úteis. Sites institucionais em até 10 dias. Projetos personalizados são combinados conforme a complexidade. Sempre envio prévias durante o processo para você acompanhar.'
  },
  {
    question: 'Quem cuida do domínio e da hospedagem?',
    answer: 'Eu cuido de tudo. Registro o domínio no seu nome (você fica como dono) e configuro a hospedagem no primeiro ano por minha conta. Depois disso, você pode renovar diretamente ou continuar comigo cuidando.'
  },
  {
    question: 'Vou conseguir editar o site sozinho depois?',
    answer: 'Para mudanças simples como textos, fotos e horários, sim — entrego com instruções e suporte por WhatsApp nos primeiros 30 dias. Para mudanças maiores (novas seções, redesign), faço por um valor de manutenção combinado.'
  },
  {
    question: 'Tem suporte depois da entrega?',
    answer: 'Sim. Todos os planos incluem suporte gratuito (30 a 60 dias) para ajustes, dúvidas e correções. Após esse período, ofereço pacotes de manutenção mensal opcionais a partir de R$ 80/mês.'
  },
  {
    question: 'Meu site vai aparecer no Google?',
    answer: 'Sim. Configuro SEO básico em todos os projetos: meta tags, Open Graph, sitemap, indexação no Google Search Console e Google Analytics. Para ranquear nas primeiras posições, é necessário trabalho contínuo de conteúdo e SEO avançado, que posso indicar ou executar sob demanda.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: '50% no início do projeto (após aprovação do escopo) e 50% na entrega final. Aceito Pix, transferência e cartão parcelado em até 6x. O orçamento é sempre fechado antes — sem custos extras durante o processo.'
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'O processo inclui rodadas de feedback antes da entrega final, então surpresas são raras. Mesmo assim, ofereço até 2 rodadas de ajustes amplos sem custo adicional, garantindo que o resultado fique do jeito que você imaginou.'
  },
  {
    question: 'Você atende fora da minha cidade?',
    answer: 'Sim! Atendo em todo o Brasil 100% online. Toda a comunicação é feita por WhatsApp, e-mail e chamadas de vídeo quando necessário. O processo é totalmente remoto e funciona muito bem.'
  }
]

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" aria-labelledby="faq-titulo">
    <div class="faq-header reveal">
      <div class="section-label">Perguntas frequentes</div>
      <h2 id="faq-titulo" class="section-title">Tirando suas <em>dúvidas</em></h2>
    </div>

    <div class="faq-list">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item reveal"
        :class="{ open: openIndex === index }"
      >
        <summary
          @click="toggle(index)"
          :aria-expanded="openIndex === index"
        >
          {{ faq.question }}
          <span class="faq-icon"><i class="fa-solid fa-plus" aria-hidden="true"></i></span>
        </summary>
        <div v-if="openIndex === index" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
