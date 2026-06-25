// Attend que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
  // Variable qui stocke le nombre de likes (initialisé à 0)
  let nbLikes = 0;
  // Récupère le bouton like par son id
  const boutonLike = document.getElementById('mon-bouton-like');
  // Récupère le bouton compteur (affiche le nombre de likes)
  const compteurLike = document.getElementById('compteur-like');

  // Si les éléments n'existent pas sur la page, on quitte
  if (!boutonLike || !compteurLike) {
    return;
  }

  // Fonction qui déclenche l'animation de confettis
  function celebrateWithConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Ajoute un écouteur sur le bouton like pour incrémenter le compteur
  boutonLike.addEventListener('click', function () {
    nbLikes += 1; // incrémente le nombre de likes
    compteurLike.textContent = nbLikes; // met à jour le texte du compteur
    
    // Si le nombre de likes est un multiple de 25, lance les confettis
    if (nbLikes % 25 === 0) {
      celebrateWithConfetti();
    }
  });
  
  // Ajoute une animation lors du clic sur les boutons « Page d'accueil »
  const homeButtons = document.querySelectorAll('.home-button');
  homeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // empêche la navigation immédiate
      document.body.classList.add('fade-out'); // ajoute la classe pour l'animation
      setTimeout(function() {
        window.location.href = button.getAttribute('href'); // navigue après l'animation
      }, 800);
    });
  });
});
