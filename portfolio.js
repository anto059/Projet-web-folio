// Create a clickable portfolio block that links to anthony.html
document.addEventListener('DOMContentLoaded', function () {
  // Function to create a portfolio block
  function createPortfolioBlock(href, label, emoji) {
    // Create anchor wrapper
    var a = document.createElement('a');
    a.href = href;
    a.setAttribute('aria-label', label);
    a.style.textDecoration = 'none';
    a.style.display = 'inline-block';
    a.style.margin = '12px 20px';

    // Create block container
    var block = document.createElement('div');
    block.className = 'portfolio-block';
    block.style.display = 'inline-flex';
    block.style.flexDirection = 'column';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
    block.style.width = '200px';
    block.style.height = '160px';
    block.style.border = '3px solid #FF69B4';
    block.style.borderRadius = '8px';
    block.style.padding = '12px';
    block.style.boxSizing = 'border-box';
    block.style.background = 'linear-gradient(135deg, #FFB6D9 0%, #FFDDC1 100%)';
    block.style.color = '#6A4C93';
    block.style.cursor = 'pointer';
    block.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    // Icon: circular image
    var icon = document.createElement('div');
    icon.className = 'portfolio-icon';
    icon.style.width = '72px';
    icon.style.height = '72px';
    icon.style.borderRadius = '50%';
    icon.style.overflow = 'hidden';
    icon.style.display = 'flex';
    icon.style.alignItems = 'center';
    icon.style.justifyContent = 'center';
    // Use an emoji
    var emojiDiv = document.createElement('div');
    emojiDiv.textContent = emoji;
    emojiDiv.setAttribute('aria-hidden', 'true');
    emojiDiv.style.fontSize = '40px';
    emojiDiv.style.lineHeight = '1';
    emojiDiv.style.display = 'flex';
    emojiDiv.style.alignItems = 'center';
    emojiDiv.style.justifyContent = 'center';
    icon.appendChild(emojiDiv);

    // Label
    var labelDiv = document.createElement('div');
    labelDiv.className = 'portfolio-label';
    labelDiv.style.marginTop = '8px';
    labelDiv.style.fontSize = '16px';
    labelDiv.style.textAlign = 'center';
    labelDiv.style.fontWeight = 'bold';
    labelDiv.style.color = '#6A4C93';
    labelDiv.style.fontFamily = "'Georgia', serif";
    labelDiv.textContent = label;

    block.appendChild(icon);
    block.appendChild(labelDiv);
    a.appendChild(block);

    return a;
  }

  // Create container for portfolio blocks
  var container = document.getElementById('portfolio-container');
  if (container) {
    // Create a wrapper for blocks to display them side by side
    var blocksWrapper = document.createElement('center');
    blocksWrapper.style.marginTop = '40px';
    blocksWrapper.style.display = 'flex';
    blocksWrapper.style.justifyContent = 'center';
    blocksWrapper.style.flexWrap = 'wrap';

    // Add Anthony block
    blocksWrapper.appendChild(createPortfolioBlock('anthony.html', 'Portfolio de Anthony', '🎧'));
    
    // Add Axel block
    blocksWrapper.appendChild(createPortfolioBlock('axel.html', 'Portfolio de Axel', '🎾'));

    container.appendChild(blocksWrapper);
  }
});

// Optional: small helper to allow styling from CSS by class names
// .portfolio-block, .portfolio-icon, .portfolio-label can be targeted in site CSS
