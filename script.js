document.addEventListener('DOMContentLoaded', function () {
  let nbLikes = 0;
  const boutonLike = document.getElementById('mon-bouton-like');
  const compteurLike = document.getElementById('compteur-like');

  if (!boutonLike || !compteurLike) {
    return;
  }

  function celebrateWithConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  boutonLike.addEventListener('click', function () {
    nbLikes += 1;
    compteurLike.textContent = nbLikes;
    
    // Confettis tous les 25 likes (25, 50, 75, 100, 125, etc.)
    if (nbLikes % 25 === 0) {
      celebrateWithConfetti();
    }
  });
  
  // Animation pour le bouton "Page d'accueil"
  const homeButtons = document.querySelectorAll('.home-button');
  homeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = button.getAttribute('href');
      }, 800);
    });
  });
});