const foo = document.querySelector('.ball');

document.addEventListener('click', (e) => {
    foo.style.transform = `translateY(${e.clientY - 50}px)`;
    foo.style.transform += `translateX(${e.clientX - 50}px)`;
})
