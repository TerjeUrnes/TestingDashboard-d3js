import { DataLink } from "./data/datalink.js";


export class TestingDashboard {

    _dataFilePath = "../data/data.csv";

    _dataLink;

    constructor() {

        //this._testButton.addEventListener('click', this._testButtonClick.bind(this));

        this.Initialize();
        this.LoadData();
    }

    Initialize() {
        this._dataLink = new DataLink();
    }

    LoadData() {
        d3.csv(this._dataFilePath).then(
            (result) => { this._dataLink.SetData(result); }
        );
    }
}