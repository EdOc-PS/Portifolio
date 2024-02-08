class CardWorks extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const cardWorksContainer = document.createElement("a");
        cardWorksContainer.setAttribute("class", "card-works-container");
        cardWorksContainer.href = this.getAttribute("link");
        cardWorksContainer.target = "_blank";

        const cardImg = document.createElement("div");
        cardImg.setAttribute("class", "card-img");

        const img = document.createElement("img");
        img.src = this.getAttribute("image");
        img.alt = "project"

        const progress = document.createElement("span");
        progress.textContent = this.getAttribute("progress");
        
        cardImg.appendChild(img);
        cardImg.appendChild(progress);
        
        const cardInfo = document.createElement("div");
        cardInfo.setAttribute("class", "card-info");

        const nameProject = document.createElement("h5");
        nameProject.textContent = this.getAttribute("name");

        const icon = document.createElement("img");
        icon.src = this.getAttribute("icone");
        icon.alt = "icon"
        icon.setAttribute("class", "card-icons");
   

        cardInfo.appendChild(nameProject);
        cardInfo.appendChild(icon)

        cardWorksContainer.appendChild(cardImg);
        cardWorksContainer.appendChild(cardInfo);

        return cardWorksContainer;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        a {
            text-decoration: none;
        }
        
        .card-works-container .card-img{
            position: relative;
            display: inline-flex;
            align-items: start;
            justify-content: end;
        }
        .card-works-container .card-img img{
            width: 155px;
            border-radius: 20px;
        }
        .card-works-container .card-img span{
            text-transform: uppercase;
            border: 1.5px dashed #FFA447;
            background-color: #F9E090 ;
            border-radius: 50%;
            margin: .3rem .4rem;
            height: 15px;
            width: 15px;
            position: absolute;
            z-index: 1;
        }
        .card-works-container .card-info{
            display: flex;
            padding: .5rem;
            justify-content: space-between;
            align-items: center;
        }
        .card-info h5{
            margin: 0;
            color: #fff;
        }
        .card-info .card-icons{
            width: 20px;
        }
        `
        return style;
    }
}
customElements.define('card-works', CardWorks);