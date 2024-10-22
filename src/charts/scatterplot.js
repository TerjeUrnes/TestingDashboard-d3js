import { Chart } from "./chart.js"


export class ScatterPlot extends Chart {

    _xScale;
    _yScale;
    _xAxis;
    _yAxis;

    constructor(dataLink) {
        super(dataLink);
    }

    UpdateChart() {

        if (this._data == undefined) {
            return;
        }


        console.log(this._width);

        const range = d3.extent(this._data, d => d.year);
        console.log(range);

        const firstYear = this._data.filter(d => d.year === range[0]);

        const margin = { top: 10, right: 10, bottom: 40, left: 20 };

        this._xScale= d3.scaleLinear()
            .domain([0, d3.max(this._data, d => parseFloat(d.fertility))])
            .range([margin.left, this._width - margin.right])
            .nice();

        this._yScale = d3.scaleLinear()
            .domain([0, d3.max(this._data, d => d.life_expectancy)])
            .range([this._height - margin.bottom, margin.top])
            .nice();

        const color = d3.scaleOrdinal()
            .domain(this._data.map(d => d.region))
            .range(d3.schemeTableau10);

        this._d3Context.attr("fill", "black")
            .attr("stroke", "black");

        this._xAxis = this._d3Context.append("g")
            .attr("transform", `translate(0,${this._height - margin.bottom})`)
            .call(d3.axisBottom(this._xScale));

        this._xAxis.attr("font-size", 20)

        console.log("is drawing " + margin.bottom);
    }

}