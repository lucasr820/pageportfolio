// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

// Hamburger / mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenu');

function openMenu() {
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Fechar menu');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menu');
}

hamburger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomeVal = document.getElementById('nome').value.trim();
  const emailVal = document.getElementById('email').value.trim();
  if (!nomeVal || !emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) return;
  const btn = this.querySelector('.form-submit');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Enviando...';
  const data = new FormData(this);
  fetch('https://formspree.io/f/xdapeawe', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
    .then(res => {
      if (res.ok) {
        document.getElementById('formSuccess').style.display = 'flex';
        btn.style.display = 'none';
        this.reset();
      } else {
        btn.disabled = false;
        btn.innerHTML = 'Enviar mensagem <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>';
      }
    })
    .catch(() => {
      btn.disabled = false;
      btn.innerHTML = 'Enviar mensagem <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>';
    });
});
