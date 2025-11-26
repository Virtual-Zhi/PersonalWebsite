const colors = ["#4181e8", "#c098d9", "#aeb3b8", "#92a694", "#9c92a6"];

document.addEventListener('mousemove', function (e) {

  const trail = document.createElement("div");
  trail.className = "trail";

  const color = colors[Math.floor(Math.random() * colors.length)];
  trail.style.background = color;

  const spread = 5;
  const offsetX = (Math.random() - 0.5) * spread;
  const offsetY = (Math.random() - 0.5) * spread;

  trail.style.left = (e.clientX + offsetX) + "px";
  trail.style.top = (e.clientY + offsetY) + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 300);
})


// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
