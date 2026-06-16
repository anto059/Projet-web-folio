// Create a clickable portfolio block that links to anthony.html
document.addEventListener('DOMContentLoaded', function () {
  // Create anchor wrapper
  var a = document.createElement('a');
  a.href = 'anthony.html';
  a.setAttribute('aria-label', "Portfolio de Anthony");
  a.style.textDecoration = 'none';
  // make block centered when inserted
  a.style.display = 'block';
  a.style.margin = '12px auto 0 auto';

  // Create block container
  var block = document.createElement('div');
  block.className = 'portfolio-block';
  block.style.display = 'inline-flex';
  block.style.flexDirection = 'column';
  block.style.alignItems = 'center';
  block.style.justifyContent = 'center';
  block.style.width = '200px';
  block.style.height = '160px';
  block.style.border = '2px solid #333';
  block.style.borderRadius = '8px';
  block.style.padding = '12px';
  block.style.boxSizing = 'border-box';
  block.style.background = '#fff';
  block.style.color = '#111';
  block.style.cursor = 'pointer';

  // Icon: circular image of graduation cap
  var icon = document.createElement('div');
  icon.className = 'portfolio-icon';
  icon.style.width = '72px';
  icon.style.height = '72px';
  icon.style.borderRadius = '50%';
  icon.style.overflow = 'hidden';
  icon.style.display = 'flex';
  icon.style.alignItems = 'center';
  icon.style.justifyContent = 'center';
  // Use an emoji for the graduation cap (🎓)
  var emoji = document.createElement('div');
  emoji.textContent = '🎓';
  emoji.setAttribute('aria-hidden', 'true');
  emoji.style.fontSize = '40px';
  emoji.style.lineHeight = '1';
  emoji.style.display = 'flex';
  emoji.style.alignItems = 'center';
  emoji.style.justifyContent = 'center';
  icon.appendChild(emoji);

  // Label
  var label = document.createElement('div');
  label.className = 'portfolio-label';
  label.style.marginTop = '8px';
  label.style.fontSize = '16px';
  label.style.textAlign = 'center';
  label.textContent = 'Portfolio de Anthony';

  block.appendChild(icon);
  block.appendChild(label);
  a.appendChild(block);

  // Insert into a container if present, otherwise at end of body
  var container = document.getElementById('portfolio-container') || document.body;
  // Wrap anchor in a <center> so the block appears centered below the title
  var centerWrap = document.createElement('center');
  centerWrap.appendChild(a);
  // Prefer to place the block below a subtitle if present.
  // Look for common subtitle selectors (id="subtitle", class="subtitle" or first h2 inside container)
  var subtitle = container.querySelector('#subtitle, .subtitle') || container.querySelector('h2');
  if (subtitle) {
    subtitle.parentNode.insertBefore(centerWrap, subtitle.nextSibling);
  } else {
    // Try to place the new block below the first existing link to anthony.html
    var firstAnthonyLink = container.querySelector("a[href='anthony.html']");
    if (firstAnthonyLink) {
      firstAnthonyLink.parentNode.insertBefore(centerWrap, firstAnthonyLink.nextSibling);
    } else {
      container.appendChild(centerWrap);
    }
  }
});

// Optional: small helper to allow styling from CSS by class names
// .portfolio-block, .portfolio-icon, .portfolio-label can be targeted in site CSS
