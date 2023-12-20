const variable = {
    menu: document.querySelector('.menu'),
    menuExpnd: document.querySelector('#menu-expand'),

};


//menu se expandir
variable.menuExpnd.addEventListener('click', function(){
    variable.menu.classList.toggle("expanded");
})
