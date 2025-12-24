// ===== Previous Page Button Navigation =====
document.querySelector('.previous-btn')?.addEventListener('click', () => {
    window.location.href = "index.html"; // Go to Home page
});

// ===== Box Click Highlight Effect =====
const boxes = document.querySelectorAll('.about-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.transform = "scale(1.03)";
        box.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
        box.style.filter = "hue-rotate(25deg)";

        setTimeout(() => {
            box.style.transform = "";
            box.style.boxShadow = "";
            box.style.filter = "";
        }, 350);
    });
});
