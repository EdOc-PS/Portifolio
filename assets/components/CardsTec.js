class CardsTec extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const cardTecBody = document.createElement("div");
        cardTecBody.setAttribute("class", "tec-body");
        cardTecBody.style.backgroundColor = this.getAttribute("color")

        const tecInfo = document.createElement("div");
        tecInfo.setAttribute("class", "tec-info");

        const icon = document.createElement("img");
        icon.src = "./assets/img/icons/"+this.getAttribute("icon");
        icon.alt = "icon";
     

        const name = document.createElement("span");
        name.textContent = this.getAttribute("name");
        icon.setAttribute("class", "tec-name");

        tecInfo.appendChild(icon);
        tecInfo.appendChild(name);
        cardTecBody.appendChild(tecInfo);

        return cardTecBody;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .tec-body {
                padding: .1.6rem;
                border-radius: 5px;
                font-weight: 600;
            }
            
            .tec-info {
                padding: .5rem .7rem;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                font-size: 14px;
                gap: .8rem
            }
            
            .tec-info img {
                width: 20px;
                height: auto;
            }
        `;
        return style;
    }
}
customElements.define("card-tec", CardsTec);
