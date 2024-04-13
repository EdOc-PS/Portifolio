class CardsCareer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        
        const cardCareer = document.createElement("div");
        cardCareer.setAttribute("class", "card-career");
        
        const cardItens = document.createElement("div");
        cardItens.setAttribute("class", "career-itens");
        
        const cardControl = document.createElement("div");
        cardControl.setAttribute("class", "career-control");
        
        const title = document.createElement("h3");
        title.textContent = this.getAttribute("title");

        const icon = document.createElement("img");
        icon.src = "./assets/img/icons/"+this.getAttribute("icon");
        icon.alt = "icon";
     
        cardControl.appendChild(title);
        cardControl.appendChild(icon);
        
        cardItens.appendChild(cardControl);

        const careerLocal = document.createElement("span");
        careerLocal.setAttribute("class", "career-local");
        careerLocal.textContent = this.getAttribute("local");

        const careerData = document.createElement("span");
        careerData.setAttribute("class", "career-data");
        careerData.textContent = this.getAttribute("data");

        cardItens.appendChild(careerLocal);
        cardItens.appendChild(careerData);

        const careerSpace = document.createElement("div");
        careerSpace.setAttribute("class", "career-space");

        const careerBall = document.createElement("span");
        careerBall.setAttribute("class", "career-ball");

        const careerLine = document.createElement("span");
        careerLine.setAttribute("class", "career-line");

        careerSpace.appendChild(careerBall);
        careerSpace.appendChild(careerLine);

        cardCareer.appendChild(cardItens);
        cardCareer.appendChild(careerSpace);

        const side = this.getAttribute("side") || "left";
        this.sides(side, cardCareer);

        return cardCareer;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        .card-career{
            display: flex;
            height: 10vh;
        }
        .career-itens{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 37%;
            align-items: end;
            padding: 0 .8rem;
            background: linear-gradient(150deg, #23272FB3, #333A45 98%);
            border-radius: 10px;
        }
        .career-control{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 100%;
        }
        .career-control img{
            width: 30px;
            height: auto;
        }
        .career-control h3{
            text-align: end;
            word-break: break-word;
            font-size: 14px;
            font-weight: 800;   
            margin: 0;
        }
        .career-local,
        .career-data{
            font-size: 12px;
            color: #99A1B3;
        }
        
        .career-space{
           display: flex;
           flex-direction: column;
           align-items: center;
           margin: 0 2%;
        }
        
        .career-ball{
            width: 17px;
            height: 24px;
            display: flex;
            border-radius: 50%;
            background-color: transparent;
            border: 3px solid #08FFC8;
        }
        
        
        .career-line {
            height: 100%;
            display: block;
            width: 3px;
            background: #08FFC8;
         
        }
        @media screen and (min-width: 992px) {
            .card-career {
                display: flex;
                flex-direction: column;
                height: 100%;
            
            }
        
            .career-itens {
                width: 100%;
                padding: .8rem;
                align-items: inherit;
               
            }
            .career-control{
                flex-direction: row;
            
            }
            .career-control h3 {
                font-size: 16px;
                text-align: inherit;
            }
        
            .career-local,
            .career-data {
                font-size: 14px;
        
            }
        
            .career-space {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 10px 0;
            }
        
            .career-ball {
                width: 25px;
                height: 22px;
                border: 4px solid #08FFC8;
            }
        
            .career-line {
                height: 4px;
                width: 100%;
            }
        }
        `;
        return style;
    }

    sides(side, card){
        if(side === "right"){
            if(window.innerWidth < 992){
                card.style.flexDirection = 'row-reverse';
            }else{
                card.style.flexDirection = 'column-reverse';
            }
            
            
                
       
        }
        
    }
}
customElements.define("card-career", CardsCareer);
