import React  from "react";
import styled from 'styled-components';
import DISPLAY_SLOTS from './constants';
import { Operand1, Operand2, Operator } from "./DropableKey";
import KeyDesign from './KeyDesign';
import PropTypes from "prop-types";

const Screen = styled.div`
display: flex;

margin: 0 auto;
margin-top: 30px;
justify-content: center;
 @media (min-width: 768px) { 
        width:  700px;
        align-items: center; 
        justify-content: flex-start;      
}
@media (min-width: 992px) { 
        width: 980px;
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
    }
`;

const Wrapper = styled.div`
display:flex;
padding:  15px 3px;

@media (min-width: 768px) { 
        justify-content: flex-end;
        padding: 10px 15px 10px 15px;
    }
    @media (min-width: 992px) { 
        justify-content: flex-end;
        padding: 10px 5px 10px 15px;
    }
`;

const EqualKey = styled.div`
@media (max-width: 500px) {
    
    div{
        padding-right:0;    
        width:35px;
    }
    
}
`
const Result = styled.div`
@media (max-width: 500px) {
   
    div{
        padding-right:0;
    }
    
}
`
export default function Display (props){
    return(
        <Screen>
            <Wrapper  style={{ backgroundColor:'white', flex:2, justifyContent: 'space-between'
                }}  >
                <Operand1 selectCalculatorKey={props.selectCalculatorKey} draggingKey={props.draggingKey}  callSetDisplayKey={props.setDisplayKey}  content={props.displayKeys[DISPLAY_SLOTS.OPERAND1].symbol} />
                <Operator selectCalculatorKey={props.selectCalculatorKey} draggingKey={props.draggingKey} callSetDisplayKey={props.setDisplayKey}  content={props.displayKeys[DISPLAY_SLOTS.OPERATOR].symbol} />
                <Operand2 selectCalculatorKey={props.selectCalculatorKey} draggingKey={props.draggingKey} callSetDisplayKey={props.setDisplayKey}  content={props.displayKeys[DISPLAY_SLOTS.OPERAND2].symbol}/>
            </Wrapper>
            <Wrapper style={{paddingLeft:0,paddingRight:0}} >
                <EqualKey>
                    <KeyDesign bgColor='transparent' color="#61c9a6"  isEvenKey={true} >=</KeyDesign>
                </EqualKey>

            </Wrapper>
            <Wrapper>
                <Result>
                    <KeyDesign bgColor='transparent' style={{justifyContent: 'flex-start'}} color="#61c9a6"  isEvenKey={true} >{ props.result}</KeyDesign>
                </Result>

            </Wrapper>
        </Screen>
    )
}


Display.propTypes={
    displayKeys: PropTypes.object,
    draggingKey: PropTypes.object, //{   symbol: key.id, type: key.type }
    selectCalculatorKey: PropTypes.func,
    setDisplayKey: PropTypes.func,
    result: PropTypes.any
}