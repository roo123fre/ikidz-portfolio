const menu = document.querySelector('.menu')
const menuItem = document.querySelector('.header__nav-list')



menu.addEventListener('click',()=>{
    menuItem.classList.toggle('active')
})

