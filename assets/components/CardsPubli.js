class CardsPubli extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {

        const cardPubli = document.createElement("a");
        cardPubli.setAttribute("class", "publi-body");
        cardPubli.href = this.getAttribute("link");
        cardPubli.target = "_blank";


        const icon = document.createElement("img");
        icon.src = "./assets/img/icons/"+this.getAttribute("icon");
        icon.alt = "icon";
     
        
        const cardInfo = document.createElement("div");
        cardInfo.setAttribute("class", "publi-info");

        const title = document.createElement("h5");
        title.textContent = this.getAttribute("title");
        
        const desc = document.createElement("p");
        desc.textContent = this.getAttribute("desc");

        cardInfo.appendChild(title);
        cardInfo.appendChild(desc);

        cardPubli.appendChild(icon);
        cardPubli.appendChild(cardInfo)

        return cardPubli;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .publi-body{
                background: linear-gradient(220deg, #23272FB3, #333A45 80%);
                padding: .6rem 0.7rem;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                font-size: 14px;
                gap: .5rem;
                color: white;
                border-radius: 10px;
                text-decoration: none;
            }
            .publi-body img{
                display:flex;
                background-color: #08FFC8;
                padding: .7rem;
                border-radius: 10px;
            }
            .publi-info{
                width: 100%;
            }

            .publi-info p{
                color: #99A1B3;
            } 

            .publi-info p, .publi-info h5{
                text-align: end;
                font-size: 12px;
            }
          
            h5, p{
                margin: 0;
            }
        `;
        return style;
    }
}
customElements.define("card-publi", CardsPubli);
