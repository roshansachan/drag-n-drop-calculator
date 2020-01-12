export default (number) => {
    if(number!==''){
        if(Math.round(number) !== number) {
            return  number.toFixed(2);
        }
    }
    return number;
}