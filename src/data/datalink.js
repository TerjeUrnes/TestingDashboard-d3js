

export class DataLink {

    _data;
    _eventCallbacks = {};

    constructor() {

    }

    SetData(data) {
        this._data = data;
        
        this.dispatchEvent('dataLoaded', { data: this._data });
    }

    addEventListener(eventType, callback) {
        if(typeof callback !== "function") return;
        if(this._eventCallbacks[eventType] === undefined) {
            this._eventCallbacks[eventType] = [];
        }

        this._eventCallbacks[eventType].push(callback);
    }

    dispatchEvent(eventType, data) {
        if(this._eventCallbacks[eventType] === undefined) return;
        
        this._eventCallbacks[eventType].forEach(callback => {
            callback(data);
        })
    }
}