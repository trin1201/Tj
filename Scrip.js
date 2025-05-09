
const desktop = document.getElementById('desktop');
let pressTimer;

desktop.addEventListener('mousedown', (e) => {
    pressTimer = setTimeout(() => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.style.left = `${e.clientX}px`;
        icon.style.top = `${e.clientY}px`;
        desktop.appendChild(icon);
    }, 800);
});

desktop.addEventListener('mouseup', () => clearTimeout(pressTimer));
desktop.addEventListener('mouseleave', () => clearTimeout(pressTimer));
