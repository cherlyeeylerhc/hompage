// Canvas setup-------------
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

// Set up Particles--------------
const particles = [];
const COUNT = 50;
for (let i = 0; i < COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 0.7,
    vy: Math.random() * 0.7,
    r: Math.random() * 5 + 3,
  });
}
// Animation for Particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // move-------------------
  particles.forEach((p) => {
    p.x += p.vx; // the same as p.x = p.x +p.vx
    p.y += p.vy;

    // bounce-----------------
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(146, 173, 176, 0.3)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
