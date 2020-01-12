export default ({operand1:operand1Obj,
                    operator:operatorObj,
                    operand2:operand2Obj})=>{

    if(!operand1Obj && !operand2Obj){ //both operand not set
        return '';
    }

    if((operand1Obj && !operand2Obj) || (!operand1Obj && operand2Obj)){ //one of the operand set

        if(!operatorObj){ //operator not set. Show the operand
            if(operand1Obj) {
                return  operand1Obj ? operand1Obj.symbol*1 : 0;
            }
            if(operand2Obj) {
                return  operand2Obj ? operand2Obj.symbol*1 : 0;
            }
        }else{ //operator set
            //wait for next operand
            return  '';
        }


    } else{
        if(!operatorObj){
           return  '';
        }
        let operand1 = operand1Obj ? operand1Obj.symbol*1 : 0;
        let operand2 = operand2Obj? operand2Obj.symbol*1 : 0;
        let operator =  operatorObj.symbol;

        switch (operator) {
            case '+':
                return (operand1) + (operand2);
            case '-':
                return (operand1) - (operand2);
            case '*':
                return (operand1) * (operand2);
            case '/':
                return (operand1) / (operand2);
            default:
                return  '';
        }
    }
}