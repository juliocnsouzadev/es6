class DateHelper {

    contructor(){
        throw new Error('this class should not be instantiated');
    }

    static txtToDate(txt) {
        if(!/\d{4}-\d{2}-\d{2}/.test(txt)){
            throw new Error("value should be in yyyy-mm-dd format");
        }
        return new Date(... txt.split('-')
                .map((item, indice) => item - indice % 2));
    }

    static dateToTxt(date){
        return `${date.getDate()}/${date.getMonth()-1}/${date.getFullYear()}`;
    }

}