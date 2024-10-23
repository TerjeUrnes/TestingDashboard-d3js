import { Chart } from "./chart.js"


export class ScatterPlot extends Chart {

    _xScale;
    _yScale;
    _xAxis;
    _yAxis;
    _country;
    _yearLabel;

    constructor(dataLink) {
        super(dataLink);
        this._dataLink.AddEventListener("dataLoaded", this.LoadedData.bind(this));
    }

    UpdateChart() {

        if (this._data == undefined) {
            return;
        }

        const range = d3.extent(this._data, d => d.year);

        const firstYear = this._data.filter(d => d.year === range[0]);

        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        this._xScale= d3.scaleLinear()
            .domain([0, d3.max(this._data, d => parseFloat(d.fertility))])
            .range([margin.left, this._width - margin.right])
            .nice();

        this._yScale = d3.scaleLinear()
            .domain([0, d3.max(this._data, d => parseFloat(d.life_expectancy))])
            .range([this._height - margin.bottom, margin.top])
            .nice();

        const color = d3.scaleOrdinal()
            .domain(this._data.map(d => d.region))
            .range(d3.schemeTableau10);

        this._xAxis = this._d3Context.append("g")
            .attr("transform", `translate(0,${this._height - margin.bottom})`)
            .call(d3.axisBottom(this._xScale));

        //this._xAxis.attr("font-size", 20);

        this._yAxis = this._d3Context.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(this._yScale));

        //this._yAxis.attr("font-size", 20);

        this._country = this._d3Context.append("g")
            .selectAll("circle")
            .data(firstYear)
            .join("circle")
            .attr("cx", d => this._xScale(parseFloat(d.fertility)))
            .attr("cy", d => this._yScale(parseFloat(d.life_expectancy)))
            .attr("r", 5)
            .attr("fill", d => color(d.region));

        this._yearLabel = this._d3Context.append("text")
            .attr("x", this._width - margin.right - 20)
            .attr("y", this._height - margin.bottom - 20)
            .attr("text-anchor", "end")
            .attr("font-size", 20)
            .text(range[0]);
    }

}