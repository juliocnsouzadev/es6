class View {

    constructor(element){
        this._element = element;
    }

    template(){
        throw new Error("this method has to be implemented in the child class!")
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }

}