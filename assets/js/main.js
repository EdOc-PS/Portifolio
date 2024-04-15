const variable = {
    nav: {
        menu: document.querySelector('.menu'),
        btnMenuExpand: document.querySelector('#menu-expand-btn'),
        btnMenu: document.querySelectorAll('.menu-a-btn'),
        txtMenu: document.querySelectorAll('.menu-txt'),
    },
    section: document.querySelectorAll('.hidden')
};




//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
})

//botão fazendo menu se desexpandir
variable.nav.btnMenu.forEach(function (btn) {
    btn.addEventListener('click', function () {
        variable.nav.menu.classList.toggle("expanded");
    });
});

//scroll animation
const observer = new IntersectionObserver((entrada) => {
   entrada.forEach((entry) =>{
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    }else{
        entry.target.classList.remove('show')
    }
   })
});

variable.section.forEach ((iten) => observer.observe(iten))