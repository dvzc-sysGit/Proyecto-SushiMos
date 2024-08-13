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

document.addEventListener('scroll', function() {
    const button = document.getElementById('floatingButton');
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
      
    const mainTop = main.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().bottom;

    if (window.scrollY >= mainTop && window.scrollY < footerTop + window.innerHeight + (2*(window.innerHeight))){
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});

document.addEventListener('scroll', function() {
    const button = document.getElementById('floatingButton');
    const main2 = document.getElementById('main2');
    const footer2 = document.getElementById('footer2');

     const mainTop2 = main2.getBoundingClientRect().top;
     const footerTop2 = footer2.getBoundingClientRect().bottom;

     if (window.scrollY >= mainTop2 && window.scrollY < footerTop2 - window.innerHeight){
         button.classList.remove('hidden');
     } else {
        button.classList.add('hidden');
     }
});

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var sideMenu = document.getElementById('sideMenu');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });
});
