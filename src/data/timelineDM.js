import { Data } from "./data.js";


export class TimelineDM extends Data {

    _timelineData;
    _years;

    get TimelineData() { return this._timelineData; }
    get Years() { return this._years; }

    constructor() {
        super();
    }

    SetData(data) {
        this._data = data;
        this.ConstructData();
        this.DispatchEvent("NewData");
    }

    ConstructData() {

        var years = this._data.map((d) => parseInt(d.year));
        this._years = Array.from(d3.union(years));

        console.log(this._years);

        this._timelineData = [];

        let i = 0;
        this._years.forEach(element => {
            this._timelineData.push({
                year: element,
                value: i++
            });
        });

        console.log(this._timelineData);
    }
}