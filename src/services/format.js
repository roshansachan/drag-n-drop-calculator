export default (number) => {

    if(number!==''){
        if(Math.round(number) !== number) {
            return  number.toFixed(2);
        }
    }
    if(number === Infinity){
        return  '∞';
    }
    return number;
}