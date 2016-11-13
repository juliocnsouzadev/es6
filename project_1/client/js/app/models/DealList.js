class DealList {

    constructor() {
        this._deals = [];
    }

    add(deal){
        this._deals.push(deal);
    }

    get deals() {
        return [].concat( this._deals);
    }
}