// Adiciona transições suaves ao passar o mouse sobre as imagens
const albumImgs = document.querySelectorAll('.album img');

albumImgs.forEach(img => {
  img.addEventListener('mouseenter', function() {
    this.style.opacity = '0.7';
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'opacity 0.3s, transform 0.3s';
  });

  img.addEventListener('mouseleave', function() {
    this.style.opacity = '1';
    this.style.transform = 'scale(1)';
  });
});

// Adiciona animações ao menu de navegação
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s';
  });

  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

AOS.init({
  duration: 800, // Duração da animação
  easing: 'ease', // Curva de animação
  once: true // Apenas animar uma vez
});

// Adiciona validação interativa aos formulários
const form = document.querySelector('form');

form.addEventListener('input', function(event) {
  const input = event.target;
  if (input.validity.valid) {
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
});