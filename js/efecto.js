document.addEventListener('DOMContentLoaded', () => {
    const textos = document.querySelectorAll('.parrafoMenu');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkVisibility = () => {
        textos.forEach(parrafoMenu => {
            if (isInViewport(parrafoMenu)) {
                parrafoMenu.classList.add('visible');
            } else {
                parrafoMenu.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
