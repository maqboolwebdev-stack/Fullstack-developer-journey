const ball = document.querySelector('.ball');

document.addEventListener('click', (e) => {
  ball.style.transform = `translateY(${e.clientY - 50}px)`;
  ball.style.transform += `translateX(${e.clientX - 50}px)`;
});
