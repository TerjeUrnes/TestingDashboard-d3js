import { Data } from "./data.js";
import { TimelineDM } from "./timelineDM.js";


export class DataLink extends Data{

    _timelineDM;

    get Data() { return this._data; }
    get TimelineDM() { return this._timelineDM; }

    constructor() {
        super();
        this._timelineDM = new TimelineDM();
    }

    SetData(data) {
        this._data = data;
        this.DispatchEvent('dataLoaded');

        this._timelineDM.SetData(data);
        console.log(this._timelineDM.TimelineData);
    }

}