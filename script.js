const letterPage = document.getElementById('letterPage');
const videoPage = document.getElementById('videoPage');

document.getElementById('openSurprise').addEventListener('click', () => {
  letterPage.classList.remove('active');
  videoPage.classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('backToLetter').addEventListener('click', () => {
  videoPage.classList.remove('active');
  letterPage.classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Floating hearts
const heartsContainer = document.getElementById('hearts');
const symbols = ['♡', '♥', '୨୧', '✧'];

function createHeart() {
  const heart = document.createElement('span');

  heart.className = 'floating-heart';
  heart.textContent = symbols[
    Math.floor(Math.random() * symbols.length)
  ];

  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (12 + Math.random() * 15) + 'px';
  heart.style.animationDuration = (8 + Math.random() * 7) + 's';

  heartsContainer.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(createHeart, 1100);
}
