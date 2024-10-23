import { Chart } from "./chart.js"


export class Timeline extends Chart {

    _xScale;
    _yScale;
    _xBottomAxis;
    _xTopAxis;
    _yLeftAxis;
    _yRightAxis;

    constructor(dataLink) {
        super(dataLink);
        this._dataLink.TimelineDM.AddEventListener("NewData", this.NewData.bind(this));
    }

    NewData() {
        this._data = this._dataLink.TimelineDM.TimelineData;
        this.UpdateChart();
    }

    UpdateChart() {

        if (this._data == undefined) {
            return;
        }

        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        console.log(this._data);
        console.log(d3.extent(this._data, (d) => d.year));

        const xDomain = d3.extent(this._data, (d) => d.year);

        this._xScale = d3.scaleBand()
            .domain(this._dataLink.TimelineDM.Years)
            .range([margin.left, this._width - margin.right]);

        let xScaleTop = d3.scaleLinear()
            .domain([xDomain[0] - 0.5, xDomain[1] + 0.5])
            .range([margin.left, this._width - margin.right]);

        this._yScale = d3.scaleLinear()
            .domain([0,d3.max(this._data, (d) => d.value)])
            .range([this._height - margin.bottom, margin.top]);

        this._xBottomAxis = this._d3Context.append("g")
            .attr("transform", `translate(0,${this._height - margin.bottom})`)
            .call(d3.axisBottom(this._xScale).tickFormat("").tickSize(5).tickSizeOuter(0));

        this._yLeftAxis = this._d3Context.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(this._yScale));

        this._xTopAxis = this._d3Context.append("g")
            .attr("transform", `translate(0, ${margin.top})`)
            .call(d3.axisTop(xScaleTop).ticks(11,".0f").tickSizeOuter(0));

        this._yRightAxis = this._d3Context.append("g")
            .attr("transform", `translate(${this._width - margin.right}, 0)`)
            .call(d3.axisRight(this._yScale));


    }
}