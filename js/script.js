const btnMenuMobile = document.querySelector('.menu-mobile-icon');
const menuMobile = document.querySelector('.menu-mobile');

btnMenuMobile.addEventListener('click', () => {
    if(menuMobile.classList.contains('hidden-menu')) {
        menuMobile.classList.remove('hidden-menu');
        menuMobile.classList.add('show-menu');
    } else {
        menuMobile.classList.add('hidden-menu');
        menuMobile.classList.remove('show-menu');
    }
})