<script setup>
import { ref } from 'vue'

const form = ref({
  nome: '',
  email: '',
  telefone: '',
  tipo: '',
  mensagem: ''
})

const isLoading = ref(false)
const submitStatus = ref(null) // null | 'success' | 'error'

async function submitForm() {
  if (!form.value.nome.trim() || !form.value.email.trim()) return
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) return

  isLoading.value = true
  submitStatus.value = null

  const data = new FormData()
  data.append('nome', form.value.nome)
  data.append('email', form.value.email)
  data.append('telefone', form.value.telefone)
  data.append('tipo', form.value.tipo)
  data.append('mensagem', form.value.mensagem)

  try {
    const res = await fetch('https://formspree.io/f/xdapeawe', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
    if (res.ok) {
      submitStatus.value = 'success'
      form.value = { nome: '', email: '', telefone: '', tipo: '', mensagem: '' }
    } else {
      submitStatus.value = 'error'
    }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contato" aria-labelledby="contato-titulo">
    <div class="contato-inner">
      <div class="contato-left reveal">
        <div class="section-label">Contato</div>
        <h2 id="contato-titulo" class="section-title">Vamos tirar seu projeto <em>do papel?</em></h2>
        <p>Pronto para dar o próximo passo? Me manda uma mensagem — vou responder rápido e a gente conversa sobre o que você precisa, sem compromisso.</p>
        <a href="https://wa.me/5567981612929?text=Ol%C3%A1!+Tenho+interesse+em+criar+um+site+para+meu+neg%C3%B3cio." target="_blank" rel="noopener" class="whatsapp-btn">
          <i class="fa-brands fa-whatsapp whatsapp-icon" aria-hidden="true"></i> Falar pelo WhatsApp
        </a>
        <div class="contato-info-list">
          <div class="contato-info-item">
            <a href="mailto:contato.lucasrubiobarrueco@gmail.com" class="contato-email-link">
              <div class="info-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></div>
              <span>contato.lucasrubiobarrueco@gmail.com</span>
            </a>
          </div>
          <div class="contato-info-item">
            <div class="info-icon"><i class="fa-solid fa-clock" aria-hidden="true"></i></div>
            <span>Respondo em até 2 horas</span>
          </div>
          <div class="contato-info-item">
            <div class="info-icon"><i class="fa-solid fa-map-pin" aria-hidden="true"></i></div>
            <span>Atendo em todo o Brasil</span>
          </div>
        </div>
      </div>

      <div class="reveal reveal-delay-1">
        <div class="contato-box">
          <h3 class="contato-box-title">Solicite seu orçamento</h3>
          <p class="contato-box-sub">Gratuito e sem compromisso!</p>
          <form class="contato-form" @submit.prevent="submitForm" novalidate>
            <div class="form-group">
              <label for="nome">Seu nome</label>
              <input type="text" id="nome" v-model="form.nome" name="nome" placeholder="João Silva" required />
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" id="email" v-model="form.email" name="email" placeholder="joao@exemplo.com" required />
            </div>
            <div class="form-group">
              <label for="telefone">Telefone / WhatsApp</label>
              <input type="tel" id="telefone" v-model="form.telefone" name="telefone" placeholder="(00) 00000-0000" />
            </div>
            <div class="form-group">
              <label for="tipo">Tipo de projeto</label>
              <input type="text" id="tipo" v-model="form.tipo" name="tipo" placeholder="Ex: site para minha clínica" />
            </div>
            <div class="form-group">
              <label for="mensagem">Mensagem</label>
              <textarea id="mensagem" v-model="form.mensagem" name="mensagem" placeholder="Me conte um pouco sobre seu negócio e o que você precisa..."></textarea>
            </div>
            <button v-if="submitStatus !== 'success'" type="submit" class="form-submit" :disabled="isLoading">
              <template v-if="isLoading">
                <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Enviando...
              </template>
              <template v-else>
                Enviar mensagem <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
              </template>
            </button>
            <div v-if="submitStatus === 'success'" class="form-success" style="display:flex;" role="alert" aria-live="polite">
              <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Mensagem enviada! Retorno em breve.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
