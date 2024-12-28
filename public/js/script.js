// Generate a random light color
function getRandomLightColor() {
  const r = Math.floor(Math.random() * 75) + 180; // Light red component (180-255)
  const g = Math.floor(Math.random() * 75) + 180; // Light green component (180-255)
  const b = Math.floor(Math.random() * 75) + 180; // Light blue component (180-255)
  return `rgb(${r}, ${g}, ${b})`;
}

// Apply random colors to each card
window.onload = function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = getRandomLightColor();
  });
};
