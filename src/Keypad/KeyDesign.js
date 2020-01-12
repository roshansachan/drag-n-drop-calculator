import styled from "styled-components";
import KEY_TYPES from "../Calculator/constants";

export default  styled.div`
    ${(props) => {
    let color;
    let bgColor;
    let outline;
    if(props.isDisabled){
        bgColor  = '#e3e3e3';
        color = outline = '#fff';
    }else{

        if(props.type === KEY_TYPES.NUMBER_KEY){
            if (props.isEvenKey) {
                bgColor = color = '#61bfc9';
                outline = '#fff';
            }else{
                bgColor = color = '#01adbb';
                outline = '#fff';
            }
        }


        if(props.type === KEY_TYPES.OPERATOR_KEY){
            if (props.isDark) {
                bgColor = color = '#02bb6f';
                outline = '#fff';


            }else{
                bgColor = color = '#61c9a5';
                outline = '#fff';
            }
        }
        
    }
    
    

    return `
        background-color:${ bgColor };
        color:${ color };
        text-shadow: -1px -1px 0 ${outline},0   -1px 0 ${outline},1px -1px 0 ${outline},1px  0   0 ${outline},1px  1px 0 ${outline},0    1px 0 ${outline},-1px  1px 0 ${outline},-1px  0   0 ${outline};
        `
    }};  
    
    
        
    font-size: ${(props)=>  props.type === KEY_TYPES.NUMBER_KEY ? '30px' : '40px' };
    display:flex;
    justify-content:center;
    align-items:center;
    width: 60px;
    height: 60px;
    margin-right:1px;     
    margin-top:1px;
    
    @media (min-width: 768px) { 
        width:  100px;
        height:  100px;
        margin-right:2px;
        margin-top:2px;
    }
    @media (min-width: 992px) { 
        font-size: ${(props)=>  props.type === KEY_TYPES.NUMBER_KEY ? '63px' : '80px' };
        width:  130px;
        height:  130px;
        margin-right:10px;
        margin-top:5px;
        margin-bottom:5px;
    }          
`;