// Create a clickable portfolio block that links to anthony.html
document.addEventListener('DOMContentLoaded', function () {
  // Function to create a portfolio block
  function createPortfolioBlock(href, label, emoji) {
    // Create anchor wrapper
    var a = document.createElement('a');
    a.href = href;
    a.setAttribute('aria-label', label);
    a.style.textDecoration = 'none';
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.margin = '12px 20px';

    // Create block container
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

    // Icon: circular image
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
    labelDiv.style.marginTop = '0';
    labelDiv.style.fontSize = '17px';
    labelDiv.style.textAlign = 'left';
    labelDiv.style.fontWeight = '700';
    labelDiv.style.color = '#ffffff';
    labelDiv.style.fontFamily = "'Georgia', serif";
    labelDiv.style.letterSpacing = '0.02em';
    labelDiv.style.whiteSpace = 'nowrap';
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
