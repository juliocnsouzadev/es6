class Message {

    constructor(txt=''){
        this._text = txt;
    }

    get text() {
        return this._text;
    }

    set text(txt){
        this._text = txt;
    }
}