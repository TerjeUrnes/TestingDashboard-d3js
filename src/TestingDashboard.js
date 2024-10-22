import { ScatterPlot } from "./charts/scatterplot.js";
import { DataLink } from "./data/datalink.js";
import { Layout } from "./layout/layout.js";


export class TestingDashboard {

    _dataFilePath = "data/gapminder.csv";

    _dataLink;
    _scatterPlot;
    _scatterPlot2;
    _layout;

    constructor() {

        //this._testButton.addEventListener('click', this._testButtonClick.bind(this));

        this.Initialize();
        this.LoadData();
    }

    Initialize() {
        this._dataLink = new DataLink();
        this._scatterPlot = new ScatterPlot(this._dataLink);
        this._scatterPlot2 = new ScatterPlot(this._dataLink);
        this._layout = new Layout();
        this._layout.MakeLayout([this._scatterPlot, this._scatterPlot2]);
        //this._scatterPlot.UpdateChart();
        //this._scatterPlot2.UpdateChart();
    }

    LoadData() {
        d3.csv(this._dataFilePath).then(
            (result) => { this._dataLink.SetData(result); }
        );
    }
}