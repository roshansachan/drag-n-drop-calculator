import styled from "styled-components";
import KEY_TYPES from '../Calculator/constants';
export default  styled.div`   
             
       
    
    ${(props) => {
        
    let color=props.color;
    let bgColor=props.bgColor;
    let outline;
    let borderColor;
    


    if(props.type === KEY_TYPES.NUMBER_KEY){
        
        if( props.content === undefined){
            bgColor = '#d5f2f6';
            borderColor= '#01adbb';
        } else{
            if (props.isEvenKey) {
                bgColor = color = '#61bfc9';
                outline = '#fff';
            }else{
                bgColor = color = '#01adbb';
                outline = '#fff';
            }    
        }
        
    }


    if(props.type === KEY_TYPES.OPERATOR_KEY){

        if( props.content === undefined){
            bgColor = '#c7e9dd';
            borderColor= '#02bb6f';
        }else{
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
        ${bgColor &&  `background-color:${ bgColor  };`}       
        ${color &&  `color:${ color  };`}
        text-shadow: -1px -1px 0 ${outline},0   -1px 0 ${outline},1px -1px 0 ${outline},1px  0   0 ${outline},1px  1px 0 ${outline},0    1px 0 ${outline},-1px  1px 0 ${outline},-1px  0   0 ${outline};
        border: ${ borderColor ? `3px dashed ${ borderColor } ` : `3px solid ${bgColor}` };        
        `
    }}; 
    transition: all 0.3s;         
    opacity: ${(props)=>  props.disable ? '0.5': '1' } ;           
    transform: scale(${(props)=> {
     
        if(props.disable){
            return 0.8;
        }    
        else if( props.accepting ){
            return 1.1;
        }else{
            return  1;
        }
        
        
    }} );           
    font-size: ${(props)=>  props.type === KEY_TYPES.NUMBER_KEY ? '30px' : '40px' };
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    width: 60px;
    height: 60px;
    margin-right:3px;     
    margin-top:3px;
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
    
    .resetOverlay{
        display:none;
    }
    :hover{
        .resetOverlay{
            display:flex;
        }
    }             
`;


export const DefaultImg = styled.img`
    width:30px;  
    @media (min-width: 768px) {
        width:auto;
    }
    
    
`;