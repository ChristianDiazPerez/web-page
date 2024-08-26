document.querySelector('.menu-btn').addEventListener('click', () => {     //al pulsar el boton 
    document.querySelector('.nav-menu').classList.toggle('despliegue');   //añadimos o quitamos, dependiendo del estado anterior, la case despliegue al nav-menu
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500});
ScrollReveal().reveal('.cards-banner-one', { delay: 500});
ScrollReveal().reveal('.cards-banner-two', { delay: 500});

// Modal Eplan. Página Proyectos Habilidades

const btnAbrirModal = 
document.querySelector("#id-btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#id-btn-cerrar-modal");
const modal =
document.querySelector("#id-modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

//Alerta proyecto no dispoble. Página Proyectos personales

//id-proyecto-no-disponible

//document.querySelector('.btm-pronto').addEventListener('click',()=>{
   // alert('Hola');
//})

document.querySelector('.btm-pronto').addEventListener('click', () => {     
    alert('Hola mundo');
})