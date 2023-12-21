const variable = {
    nav: {
        menu: document.querySelector('.menu'),
        btnMenuExpand: document.querySelector('#btn-menu-expand'),
        btnMenu: document.querySelectorAll('.menu-btn'),
        txtMenu: document.querySelectorAll('.menu-txt'),
    }
};


//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
    

})
