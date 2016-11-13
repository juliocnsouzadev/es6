class DealController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._dealList = new DealList();
        this._dealsView = new DealsView($('#dealsView'));

        this._dealsView.update(this._dealList);
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
    }
    
    add(event) {
        event.preventDefault();
        this._dealList.add(this._buildDeal());
        this._dealsView.update(this._dealList);
        this._message.text = "Deal added with sucess!";
        this._messageView.update(this._message);
        this._clearForm();
    }

    _buildDeal(){
        let date = DateHelper.txtToDate(this._inputDate.value);
        return new Deal(
            date,
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value) 
            ); 
    }

    _clearForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}