<script setup>
const screenshotSrc = '/cabana-screenshot.jpg'
</script>

<template>
  <section id="portfolio" aria-labelledby="portfolio-titulo">
    <div class="portfolio-header reveal">
      <div class="section-label">Portfólio</div>
      <h2 id="portfolio-titulo" class="section-title">Projeto em <em>destaque</em></h2>
      <p>Um case real entregue recentemente — desenvolvido do zero, pensado sob medida para o negócio.</p>
    </div>

    <article class="featured-case reveal">
      <div class="featured-visual">
        <div class="featured-browser">
          <div class="featured-bar" aria-hidden="true">
            <div class="featured-dot"></div>
            <div class="featured-dot"></div>
            <div class="featured-dot"></div>
            <div class="featured-url">cabanadopark.com.br</div>
          </div>
          <img
            class="featured-screenshot-img"
            :src="screenshotSrc"
            alt="Screenshot do site Cabana do Park"
            loading="lazy"
            @error="$event.target.style.display = 'none'; $event.target.nextElementSibling && ($event.target.nextElementSibling.style.display = 'block')"
          />
          <div class="featured-screenshot" style="display:none;" aria-hidden="true">
            <div class="featured-hero-img"></div>
            <div class="featured-grid-mini">
              <div></div><div></div><div></div>
            </div>
            <div class="featured-row-mini"></div>
            <div class="featured-row-mini short"></div>
          </div>
        </div>
      </div>
      <div class="featured-content">
        <div class="featured-tag">Case em destaque</div>
        <h3 class="featured-title">Cabana do Park</h3>
        <p class="featured-desc">Site institucional completo para pousada/espaço de eventos, com foco em gerar reservas diretas via WhatsApp e mostrar disponibilidade de forma visual.</p>
        <div class="featured-features">
          <div class="featured-feature"><i class="fa-solid fa-check" aria-hidden="true"></i><span>Calendário interativo com datas disponíveis e ocupadas</span></div>
          <div class="featured-feature"><i class="fa-solid fa-check" aria-hidden="true"></i><span>Galeria de fotos otimizada para carregamento rápido</span></div>
          <div class="featured-feature"><i class="fa-solid fa-check" aria-hidden="true"></i><span>Integração direta com WhatsApp para agilizar reservas</span></div>
          <div class="featured-feature"><i class="fa-solid fa-check" aria-hidden="true"></i><span>SEO local configurado + Google Analytics</span></div>
          <div class="featured-feature"><i class="fa-solid fa-check" aria-hidden="true"></i><span>100% responsivo e otimizado para mobile</span></div>
        </div>
        <div class="featured-stack">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>SEO</span>
          <span>GA4</span>
        </div>
        <a href="https://www.cabanadopark.com.br/" target="_blank" rel="noopener" class="featured-cta">
          Ver projeto ao vivo <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    </article>

    <p class="featured-more reveal reveal-delay-1">Quer ver mais exemplos ou discutir seu projeto? <a href="#contato">Fale comigo</a></p>
  </section>
</template>
