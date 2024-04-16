const variable = {
    nav: {
        menu: document.querySelector('.menu'),
        btnMenuExpand: document.getElementById('menu-expand-btn'),
        btnMenu: document.querySelectorAll('.menu-a-btn'),
        txtMenu: document.querySelectorAll('.menu-txt'),
        btnColor: document.getElementById('btn-color')
    },
    icons:{
        iconBtnMenu: document.querySelector('.fi.fi-sr-menu-burger'),
        iconBtnColor: document.querySelector('.fi.fi-sr-circle'),
    }
    
    ,
    section: document.querySelectorAll('.hidden')
};




//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
    variable.icons.iconBtnMenu.classList.toggle("fi-sr-x");
})
//btn de light mode
variable.nav.btnColor.addEventListener('click', function () {
    variable.icons.iconBtnColor.classList.toggle("fi-br-sun");
    variable.nav.menu.classList.toggle("light")
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