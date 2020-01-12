import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DraggableKey from "./DraggableKey";

const Board =  styled.div`
    display:flex;
    margin:0 auto;
    flex-direction: column;
    margin:0 auto;
    width:320px;
    padding: 15px 0 15px 15px;
    background-color: white;
    @media (max-width: 500px) {     
        padding: 15px 0;
    }
    @media (min-width: 768px) { 
        width:  700px;
        align-items: center;
        padding: 10px 5px 10px 15px;       
    }
    @media (min-width: 992px) { 
        width: 980px;
        display:flex;
        flex-direction:row;
        padding: 10px 5px 10px 15px;
    }            
`;
const NumberPad = styled.div`    
    justify-content: center;
    @media (min-width: 768px) { 
        justify-content: flex-end;
    }
    @media (min-width: 992px) { 
        justify-content: flex-end;
    }
    
  
`;
const OperatorPad = styled.div`
    justify-content:center;
    display:flex; 
    flex-wrap:wrap;
    @media (min-width: 768px) {    
        display: flex;   
    }
    @media (min-width: 992px) {        
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
    }

`;
export default function Keypad (props) {
    const NumbersRow1 = props.calculatorKeys.filter( calculatorKey =>    ['1','2', '3', '4', '5'].indexOf(calculatorKey.symbol) !== -1 );
    const NumbersRow2 = props.calculatorKeys.filter( calculatorKey =>    ['6', '7', '8', '9', '0'].indexOf(calculatorKey.symbol) !== -1 );
    const OperatorsRow1 = props.calculatorKeys.filter( calculatorKey =>    ['+','/'].indexOf(calculatorKey.symbol) !== -1 );
    const OperatorsRow2 = props.calculatorKeys.filter( calculatorKey =>    ['-', '*'].indexOf(calculatorKey.symbol) !== -1 );

    return(
        <Board >
            <div>
                <NumberPad style={{display:'flex', flexWrap:'wrap'}} >
                    {
                        NumbersRow1.map((calculatorKey)=> <DraggableKey

                            setDraggingKey={props.setDraggingKey}
                            type={calculatorKey.type}
                            key={calculatorKey.symbol}
                            selectCalculatorKey={props.selectCalculatorKey}
                            symbol={calculatorKey.symbol}
                            isSelected={calculatorKey.isSelected}  />)
                    }
                </NumberPad>
                <NumberPad style={{display:'flex', flexWrap:'wrap'}} >
                    {
                        NumbersRow2.map((calculatorKey)=> <DraggableKey
                            setDraggingKey={props.setDraggingKey}
                            type={calculatorKey.type}
                            key={calculatorKey.symbol}
                            selectCalculatorKey={props.selectCalculatorKey}
                            symbol={calculatorKey.symbol}
                            isSelected={calculatorKey.isSelected}  />)
                    }
                </NumberPad>
            </div>
            <div>
                <OperatorPad>
                    <div style={{ display:'flex', flexDirection:'column' }} >
                        {
                            OperatorsRow1.map((calculatorKey)=> <DraggableKey
                                setDraggingKey={props.setDraggingKey}
                                type={calculatorKey.type}
                                key={calculatorKey.symbol}
                                selectCalculatorKey={props.selectCalculatorKey}
                                symbol={calculatorKey.symbol}
                                isSelected={calculatorKey.isSelected}  />)
                        }
                    </div>
                    <div style={{ display:'flex', flexDirection:'column' }} >
                        {
                            OperatorsRow2.map((calculatorKey)=> <DraggableKey
                                setDraggingKey={props.setDraggingKey}
                                type={calculatorKey.type}
                                key={calculatorKey.symbol}
                                selectCalculatorKey={props.selectCalculatorKey}
                                symbol={calculatorKey.symbol}
                                isSelected={calculatorKey.isSelected}  />)
                        }
                    </div>
                </OperatorPad>
            </div>



        </Board>

    )
}

Keypad.propTypes={
    calculatorKeys: PropTypes.array,
    setDraggingKey: PropTypes.func,
    selectCalculatorKey: PropTypes.func,
}
