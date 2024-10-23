

export class Layout {

    _baseElm;

    constructor() {
        this.Initialize();
    }

    Initialize() {
        this._baseElm = document.getElementById("content");
    }

    MakeLayout(objects) {

        this._baseElm.style.gridTemplateColumns = "1fr 1fr";
        this._baseElm.style.gridTemplateRows = "1fr 120px";

        this.AddChart({
            obj: objects[0],
            rowStart: 1,
            rowEnd: 2,
            colStart: 1,
            colEnd: 2
        });

        this.AddChart({
            obj: objects[1],
            rowStart: 1,
            rowEnd: 2,
            colStart: 2,
            colEnd: 3
        });

        this.AddChart({
            obj: objects[2],
            rowStart: 2,
            rowEnd: 3,
            colStart: 1,
            colEnd: 3
        });
    }

    AddChart(chart) {
        const element = document.createElement("div");
        element.classList.add("chart");

        element.style.gridRowStart = chart.rowStart;
        element.style.gridRowEnd = chart.rowEnd;
        element.style.gridColumnStart = chart.colStart;
        element.style.gridColumnEnd = chart.colEnd;
        this._baseElm.appendChild(element);

        const width = element.clientWidth;
        const height = element.clientHeight;
        const rect = element.getBoundingClientRect()
        chart.obj.SetSize(rect.width, rect.height);

        element.appendChild(chart.obj.Svg);
    }

}