document.addEventListener('DOMContentLoaded', function () {
  let nbLikes = 0;
  const boutonLike = document.getElementById('mon-bouton-like');
  const compteurLike = document.getElementById('compteur-like');

  if (!boutonLike || !compteurLike) {
    return;
  }

  boutonLike.addEventListener('click', function () {
    nbLikes += 1;
    compteurLike.textContent = nbLikes;
  });
});