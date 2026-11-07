document.addEventListener("DOMContentLoaded", () => {
    // Aggiunge un effetto blur extra alla navbar quando si scrolla verso il basso
    const nav = document.querySelector('.glass-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 5, 15, 0.85)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 5, 15, 0.6)';
            nav.style.boxShadow = 'none';
        }
    });
});