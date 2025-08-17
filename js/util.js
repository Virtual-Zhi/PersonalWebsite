const colors = ["#4181e8", "#c098d9", "#aeb3b8", "#92a694", "#9c92a6"];

document.addEventListener('mousemove', function (e) {

    const trail = document.createElement("div");
    trail.className = "trail";

    const color = colors[Math.floor(Math.random() * colors.length)];
    trail.style.background = color;

    const spread = 20;
    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;

    trail.style.left = (e.clientX + offsetX) + "px";
    trail.style.top = (e.clientY + offsetY) + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800);
})