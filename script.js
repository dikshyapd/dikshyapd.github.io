const colors = ["#27273e", "#f1c6f1", "#a083a0", "#f1c6f1",];

document.addEventListener('mousemove', function(e) {
  const trail = document.createElement('div');
  trail.className = 'trail';
  
  const color = colors[Math.floor(Math.random() * colors.length)];
  trail.style.background = color;

  const spread = 0;
  const offsetX = Math.random() - 0.5 * spread;
  const offsetY = Math.random() - 0.5 * spread;

  trail.style.left = (e.pageX + offsetX) + 'px';
  trail.style.top = (e.pageY + offsetY) + 'px';

  document.body.appendChild(trail);
  setTimeout(() =>{
    trail.remove();
  }, 800);
})