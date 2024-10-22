

export class Layout {

    _baseElm;

    constructor() {
        this.Initialize();
    }

    Initialize() {
        this._baseElm = document.getElementById("content");
    }

    MakeLayout(objects) {
        const count = objects.length;
        this._baseElm.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
        this._baseElm.style.gridTemplateRows = "*";

        for (let i = 0; i < count; i++) {
            const element = document.createElement("div");
            element.classList.add("chart");

            element.style.gridRow = "1";
            element.style.gridColumnStart = `${i + 1}`;
            element.style.gridColumnEnd = `${i + 2}`;
            element.style.width = "100%";
            this._baseElm.appendChild(element);

            const width = element.clientWidth * 2;
            console.log(width);
            objects[i].Width = width;

            const svg = objects[i].Svg;
            element.appendChild(svg);
            
        }
    }

}