

export class Chart {

    _dataLink;
    _d3Context;
    _width;
    _height;
    _data;

    get Svg() {
        return this._d3Context.node();
    }

    set Width(width) {
        this._width = width;
        this._d3Context.attr("width", this._width);
        this._d3Context.attr("viewBox", [0, 0, this._width, this._height]);
        this.SetupD3Context();
        this.UpdateChart();
    }

    constructor(dataLink){
        this._dataLink = dataLink;
        this._dataLink.addEventListener("dataLoaded", this.LoadedData.bind(this));
        this._width = 640;
        this._height = 480;
        this.SetupD3Context();
    }

    LoadedData(e) {
        this._data = e.data;
        this.UpdateChart();
    }


    SetupD3Context() {
        this._d3Context = d3.create("svg")
            .attr("width", this._width)
            .attr("height", this._height)
            .attr("viewBox", [0, 0, this._width, this._height]);
    }

    GetSvg() {
        this._d3Context.node();
    }
}