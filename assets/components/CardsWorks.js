class CardWorks extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const cardWorksContainer = document.createElement("a");
        cardWorksContainer.setAttribute("class", "card-project-container");
        cardWorksContainer.href = this.getAttribute("link");
        cardWorksContainer.target = "_blank";

        /* começo div */
        const cardImg = document.createElement("div");
        cardImg.setAttribute("class", "card-project-img");

            const img = document.createElement("img");
            img.src = "./assets/images/projects/"+this.getAttribute("image");
            img.alt = "project"

            const progress = document.createElement("p");
            progress.textContent = this.getAttribute("progress");
            

        cardImg.appendChild(img);
        cardImg.appendChild(progress);
        /* fim div */

        const progressBar = document.createElement("span");
        progressBar.setAttribute("class", "progress-bar");
        
        /* começo div */
        const cardInfo = document.createElement("div");
        cardInfo.setAttribute("class", "card-info-container");

            const cardInfoTxt = document.createElement("div");
            cardInfoTxt.setAttribute("class", "card-info-txt");

                const nameProject = document.createElement("h5");
                nameProject.textContent = this.getAttribute("name");
                const descProject = document.createElement("p");
                descProject.textContent = this.getAttribute("desc");  
                
                cardInfoTxt.appendChild(nameProject);
                cardInfoTxt.appendChild(descProject);

            const cardicons = document.createElement("div");
            cardicons.setAttribute("class", "card-info-icons");

                const icon = document.createElement("img");
                icon.src = "./assets/images/icons/"+this.getAttribute("icone");
                icon.alt = "icon"
            
                cardicons.appendChild(icon)

        
   

        cardInfo.appendChild(cardInfoTxt);
        cardInfo.appendChild(cardicons);

        cardWorksContainer.appendChild(cardImg);
        cardWorksContainer.appendChild(progressBar);
        cardWorksContainer.appendChild(cardInfo);

        this.verificationProgress(progress, progressBar);
        return cardWorksContainer;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        .card-project-container {
            text-decoration: none;
            width: 160px;
            height: 190px;
            border-radius: 10px;
            background: linear-gradient(50deg, #23272FB3, #333A45 90%);
            display: flex;
            flex-direction: column;
        }
        
        .card-project-img {
            position: relative;
            display: inline-flex;
            align-items: end;
            justify-content: end;
        }
        
        .card-project-img img {
            width: 100%;
            border-radius: 10px 10px 0 0;
        }
        
        .card-project-img p {
            font-size: 10px;
            background-color: #6439F5;
            border-radius: 5px;
            margin: .3rem .4rem;
            padding: .3rem;
            position: absolute;
            z-index: 1;
            color: #EBECF0;
            text-transform: uppercase;
        }
        
        .card-project-container .progress-bar {
            display: flex;
            height: 4px;
        }
        .card-info-container{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: .5rem;
            height: 100%;
        }
        
        .card-info-txt {
            padding: .5rem .6rem;
            background-color: #333A45;
            border-radius: 10px;
        }
        
        .card-info-txt h5 {
            color: #EBECF0;
            margin: 0;
        }
        
        .card-info-txt p {
            color: #75808E;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
        }
        
        .card-info-icons{
            justify-content: right;
            display: flex;
            gap: .5rem;
           
        }
        
        .card-info-icons img{
            width: 20px;
            border-radius: 10px;
            padding: .3rem;
            background-color: #333A45;
        }

        .light-gradiente{
            background: linear-gradient(20deg, #f2e2f6 0%, #dcecfd 50%, #def5ee 100%);
            border: 1px solid #78819347;
        }

        .light-background{
            background-color: #FFFFFF !important;
            opacity: .8 !important;
            border: 1px solid #CAD0E2 !important;
        }

        .home-color-write{
            color: #788193 !important;
        }
      
        @media screen and (min-width: 992px) {
            .card-project-container{
                width: 215px;
                height: 223px;
            }
            .card-info-icons img{
                width: 21px;
            }
        }
        `
        return style;
    }

    verificationProgress(progress, progressBar){
        if(progress.textContent === "novo"){
            progress.style.backgroundColor = "#6439F5"
            progressBar.style.backgroundColor = "#6439F5"
            progressBar.style.width = "2%"
        }else if(progress.textContent === "codando"){
            progress.style.backgroundColor = "#F15D23"
            progressBar.style.backgroundColor = "#F15D23"
            progressBar.style.width = "50%"
        }else{
            progress.style.backgroundColor = "#13EAA3"
            progressBar.style.backgroundColor = "#13EAA3"
            progressBar.style.width = "100%"
        }
    }
}



customElements.define('card-works', CardWorks);