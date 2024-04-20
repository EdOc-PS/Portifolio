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

    },
    section: document.querySelectorAll('.hidden')
};

var toLight = {
    global:{
        body: document.querySelector("body"),
        iconsColor: document.querySelectorAll('i'),
        p: document.querySelectorAll('p'),
        h4: document.querySelectorAll('h4')
    },
    several:{
        socialContainer: document.querySelector('.about-social-container'),
        btnRepository: document.querySelector('.discover-repository'),
        homeh1: document.getElementById('home-h1'),
        btnHome: document.querySelector('.home-a-btn'),
        aboutDescriptionH1: document.querySelector('.about-mydescreption h1'),
        aboutDescriptionSpan: document.querySelector('.about-mydescreption span'),
        socialUl: document.querySelector('.mysocial-ul'),
        infoTxt: document.querySelector('.about-info-text'),
        infoMore: document.querySelectorAll('.about-more-text'),
        iconsInfoMore: document.querySelectorAll('.about-more-text i'),
    }
    
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
        variable.nav.btnColor.classList.toggle('light-btnColor');

        toLight.global.iconsColor.forEach((iconsColor) => {
            iconsColor.classList.toggle("light-global-color")
        }); 
        toLight.global.p.forEach((pColor) => {
            pColor.classList.toggle("light-global-color");
        }); 
        toLight.global.h4.forEach((h4Color) =>{
            h4Color.classList.toggle("light-infoMore-color");
        })

        toLight.global.body.classList.toggle("light_2");
        toLight.several.socialContainer.classList.toggle("light-container");
        toLight.several.btnRepository.classList.toggle("light-gradiente");
        toLight.several.homeh1.classList.toggle("home-color-write");
        toLight.several.btnHome.classList.toggle("light-gradiente-text");
        toLight.several.aboutDescriptionH1.classList.toggle("home-color-write");
        toLight.several.aboutDescriptionSpan.classList.toggle("home-color-write");
        toLight.several.socialUl.classList.toggle("light-gradiente")
        toLight.several.infoTxt.classList.toggle("light-container")

        toLight.several.infoMore.forEach((infoMore)=> {
            infoMore.classList.toggle("light-container_2")
        });

        toLight.several.iconsInfoMore.forEach((infoMore) =>{
            infoMore.classList.toggle("light-infoMore-color")
        })
        
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