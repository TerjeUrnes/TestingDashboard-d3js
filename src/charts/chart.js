

export class Chart {

    _dataLink;
    _d3Context;
    _width;
    _height;
    _data;

    get Svg() {
        return this._d3Context.node();
    }

    constructor(dataLink){
        this._dataLink = dataLink;
        this._width = 10;
        this._height = 10;
        this.SetupD3Context();
    }

    LoadedData() {
        this._data = this._dataLink.Data;
        this.UpdateChart();
    }


    SetupD3Context() {
        this._d3Context = d3.create("svg")
            .attr("width", this._width)
            .attr("height", this._height)
            .attr("viewBox", [0, 0, this._width, this._height]);
    }

    SetSize(width, height) {
        this._width = width;
        this._height = height;
        this._d3Context.attr("width", this._width)
            .attr("height", this._height)
            .attr("viewBox", [0, 0, this._width, this._height]);
        this.UpdateChart();
    }
}