const variable = {
    nav: {
        menu: document.querySelector('.menu'),
        btnMenuExpand: document.querySelector('#btn-menu-expand'),
        btnMenu: document.querySelectorAll('.btn-menu'),
        btnmenuActive: document.querySelector('.btn-active'),
        txtMenu: document.querySelectorAll('.menu-txt'),
        txtMenuActive: document.querySelector('actived'),


    }
};


//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
    variable.nav.btnMenuExpand.forEach((variable) =>{
        variable.nav.btnMenu.classList.toggle("btn-active");
    });
    variable.nav.txtMenu.forEach((variable) => {
        variable.nav.txtMenu.classList.toggle("actived");
    });
})
