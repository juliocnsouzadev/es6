class Deal {

    constructor(date, quantity, value){
        
        if (date instanceof Date)
            this._date = new Date(date.getTime());
        
        if (typeof quantity == "number")
            this._quantity = quantity;
        
        if (typeof value == "number")
            this._value = value;
        
        Object.freeze(this);
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get quantity(){
        return this._quantity;
    }

    get value(){
        return this._value;
    }

    get volume(){
        let volume = this.quantity * this.value;
        return isNaN(volume) ? 0 : volume;
    }


}