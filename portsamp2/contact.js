document.querySelectorAll('.contact-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.cursor = 'pointer';
    });
});
