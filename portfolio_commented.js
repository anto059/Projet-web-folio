// Attache un écouteur pour exécuter le code lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', function () {
  // Fonction qui crée un bloc cliquable de portfolio
  function createPortfolioBlock(href, label, emoji) {
    // Crée un élément <a> qui sert de wrapper cliquable
    var a = document.createElement('a');
    a.href = href; // URL de destination
    a.setAttribute('aria-label', label); // accessibilité
    a.style.textDecoration = 'none';
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.margin = '12px 20px';

    // Conteneur du bloc
    var block = document.createElement('div');
    block.className = 'portfolio-block';
    block.style.display = 'inline-flex';
    block.style.flexDirection = 'row';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'flex-start';
    block.style.minWidth = '300px';
    block.style.height = 'auto';
    block.style.border = '2px solid rgba(255, 255, 255, 0.25)';
    block.style.borderRadius = '16px';
    block.style.padding = '18px 20px';
    block.style.boxSizing = 'border-box';
    block.style.background = '#132a5e';
    block.style.color = '#ffffff';
    block.style.cursor = 'pointer';
    block.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
    block.style.boxShadow = '0 18px 34px rgba(0, 0, 0, 0.35)';

    // Icône circulaire contenant un emoji
    var icon = document.createElement('div');
    icon.className = 'portfolio-icon';
    icon.style.width = '60px';
    icon.style.height = '60px';
    icon.style.borderRadius = '50%';
    icon.style.overflow = 'hidden';
    icon.style.display = 'flex';
    icon.style.alignItems = 'center';
    icon.style.justifyContent = 'center';
    icon.style.background = 'rgba(255, 255, 255, 0.08)';
    icon.style.border = '1px solid rgba(255, 255, 255, 0.15)';
    icon.style.marginRight = '16px';
    // Div contenant l'emoji
    var emojiDiv = document.createElement('div');
    emojiDiv.textContent = emoji; // met l'emoji en texte
    emojiDiv.setAttribute('aria-hidden', 'true');
    emojiDiv.style.fontSize = '40px';
    emojiDiv.style.lineHeight = '1';
    emojiDiv.style.display = 'flex';
    emojiDiv.style.alignItems = 'center';
    emojiDiv.style.justifyContent = 'center';
    icon.appendChild(emojiDiv);

    // Label textuel du bloc
    var labelDiv = document.createElement('div');
    labelDiv.className = 'portfolio-label';
    labelDiv.style.marginTop = '0';
    labelDiv.style.fontSize = '17px';
    labelDiv.style.textAlign = 'left';
    labelDiv.style.fontWeight = '700';
    labelDiv.style.color = '#ffffff';
    labelDiv.style.fontFamily = "'Georgia', serif";
    labelDiv.style.letterSpacing = '0.02em';
    labelDiv.style.whiteSpace = 'nowrap';
    labelDiv.textContent = label; // texte visible

    // Ajout des éléments dans le DOM
    block.appendChild(icon);
    block.appendChild(labelDiv);
    a.appendChild(block);
    
    // Ajoute une animation de transition lors du clic pour un effet de fondu
    a.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = href; // navigation après l'animation
      }, 800);
    });

    return a; // retourne l'élément cliquable créé
  }

  // Récupère le conteneur où insérer les blocs
  var container = document.getElementById('portfolio-container');
  if (container) {
    // Wrapper pour afficher les blocs côte à côte
    var blocksWrapper = document.createElement('center');
    blocksWrapper.style.marginTop = '40px';
    blocksWrapper.style.display = 'flex';
    blocksWrapper.style.justifyContent = 'center';
    blocksWrapper.style.flexWrap = 'wrap';

    // Ajoute le bloc pour Anthony
    blocksWrapper.appendChild(createPortfolioBlock('anthony.html', 'Portfolio de Anthony', '🎧'));
    
    // Ajoute le bloc pour Axel
    blocksWrapper.appendChild(createPortfolioBlock('axel.html', 'Portfolio de Axel', '🎾'));

    container.appendChild(blocksWrapper);
  }
});

// Commentaire final : les classes .portfolio-block, .portfolio-icon, .portfolio-label
// peuvent être stylées depuis une feuille CSS externe si besoin.
