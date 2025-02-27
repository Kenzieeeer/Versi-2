function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.classList.add('floating-heart');
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 500);
}

document.addEventListener('DOMContentLoaded', createFloatingHearts);


