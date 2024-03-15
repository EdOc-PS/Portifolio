class CardsTec extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const CardTecBody = document.createElement("div");
        CardTecBody.setAttribute("class", "card-works-container");



        const cardImg = document.createElement("div");
        cardImg.setAttribute("class", "card-img");

        const img = document.createElement("img");
        img.src = this.getAttribute("image");
        img.alt = "project";

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
        icon.alt = "icon";
        icon.setAttribute("class", "card-icons");

        cardInfo.appendChild(nameProject);
        cardInfo.appendChild(icon);

        cardWorksContainer.appendChild(cardImg);
        cardWorksContainer.appendChild(cardInfo);

        return cardWorksContainer;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .tec-body {
                width: 90px;
                border-radius: 15px;
                background-color: #333A45;
                border-bottom: 1.5px solid #08FFC8;
            }

            .tec-info {
                padding: .5rem .7rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .tec-info img {
                width: 25px;
                height: auto;
            }
        `;
        return style;
    }
}
customElements.define("card-tec", CardsTec);
