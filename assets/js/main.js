const variable = {
    nav: {
        menu: document.querySelector('.menu'),
        btnMenuExpand: document.querySelector('#menu-expand-btn'),
        btnMenu: document.querySelectorAll('.menu-a-btn'),
        txtMenu: document.querySelectorAll('.menu-txt'),
    }
};


//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
})
