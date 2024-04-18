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
        iconBtnColor: document.querySelector('.fi.fi-sr-brightness'),
        iconBtnTxt: document.querySelectorAll('.menu-icon i'),
        iconBtnExplorer: document.querySelector('.home-a-btn i'),
    },
    section: document.querySelectorAll('.hidden')
};

var toLight = {
    body: document.querySelector("body"),
    socialContainer: document.querySelector('.about-social-container'),
    btnRepository: document.querySelector('.discover-repository'),
    homeh1: document.getElementById('home-h1'),
    btnHome: document.querySelector('.home-a-btn'),

}

//menu se expandir
variable.nav.btnMenuExpand.addEventListener('click', function () {
    variable.nav.menu.classList.toggle("expanded");
    variable.icons.iconBtnMenu.classList.toggle("fi-sr-x");
})


//btn de light mode
variable.nav.btnColor.addEventListener('click', function () {

        variable.icons.iconBtnColor.classList.toggle("fi-sr-moon");
        variable.nav.menu.classList.toggle("light-nav");
        variable.nav.btnMenu.forEach((btnMenu) => {
            btnMenu.classList.toggle("light-gradiente");
        });
        variable.nav.txtMenu.forEach((btnTxt) => {
            btnTxt.classList.toggle("light-btnTxt");
        });  
        variable.icons.iconBtnTxt.forEach((btnIconTxt) => {
            btnIconTxt.classList.toggle('light-btnTxt')
        }); 
        variable.icons.iconBtnExplorer.classList.toggle('light-btnTxt');
        variable.nav.btnColor.classList.toggle('light-btnColor');
        
        toLight.body.classList.toggle("light2");
        toLight.socialContainer.classList.toggle("light");
        toLight.btnRepository.classList.toggle("light-gradiente");
        toLight.homeh1.classList.toggle("home-color-write")
        toLight.btnHome.classList.toggle("light-gradiente-text")
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