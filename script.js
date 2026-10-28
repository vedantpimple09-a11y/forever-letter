const letterPage = document.getElementById('letterPage');
const videoPage = document.getElementById('videoPage');
const openVideo = document.getElementById('openVideo');
const backToLetter = document.getElementById('backToLetter');

function showPage(pageToShow) {
  letterPage.classList.remove('active');
  videoPage.classList.remove('active');

  pageToShow.classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

openVideo.addEventListener('click', () => {
  showPage(videoPage);
});

backToLetter.addEventListener('click', () => {
  showPage(letterPage);
});

// Soft floating hearts
const heartsContainer = document.getElementById('hearts');
const heartSymbols = ['♡', '♥', '✧'];

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (12 + Math.random() * 15) + 'px';
  heart.style.animationDuration = (8 + Math.random() * 8) + 's';

  heartsContainer.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

setInterval(createHeart, 1200);
