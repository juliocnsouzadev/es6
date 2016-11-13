class DealController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._dealList = new DealList();
    }
    
    add(event) {
        event.preventDefault();
        this._dealList.add(this._buildDeal());
        this._clearForm();
        console.log(this._dealList.deals);
    }

    _buildDeal(){
        let date = DateHelper.txtToDate(this._inputDate.value);
        return new Deal(
            date,
            this._inputQuantity.value,
            this._inputValue.value 
            ); 
    }

    _clearForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}