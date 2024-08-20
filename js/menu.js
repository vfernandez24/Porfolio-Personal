const mostrarMenu = document.querySelector('.header__btn')
const contenidoMenu = document.querySelector('.header__list')


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});