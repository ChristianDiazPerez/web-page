document.querySelector('.menu-btn').addEventListener('click', () => {     //al pulsar el boton 
    document.querySelector('.nav-menu').classList.toggle('despliegue');   //añadimos o quitamos, dependiendo del estado anterior, la case despliegue al nav-menu
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-banner-one', { delay: 500});
ScrollReveal().reveal('.cards-banner-two', { delay: 500});
