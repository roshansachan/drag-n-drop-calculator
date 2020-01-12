import React,{useContext} from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend, {Preview} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import getResult from '../services/engine';
import format from '../services/format';
import styled from 'styled-components';
import KEY_TYPES from './constants';
import DISPLAY_SLOTS from '../Display/constants';
import Keypad from "../Keypad/index";
import Display from "../Display/index";

import KeyDesign from "../Keypad/KeyDesign";
const GeneratePreview = () => {
    const {item,style} = useContext(Preview.Context);
    return <KeyDesign style={{...style}} type={item.type} isEvenKey={(item.id*1) % 2 === 0} > { item.id } </KeyDesign>;
};

const Title = styled.h1`
    
    text-align:center;   
    color: #000000;
    font-weight: 300;
    
    font-size: 30px;
    margin-bottom: 30px;
      
    @media (min-width: 768px) { 
        font-size: 40px;
        margin-bottom:50px;
    }
    @media (min-width: 992px) {
        font-size: 60px;
        margin-bottom:100px;
    }
    
    
`;

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculatorKeys : [
                { symbol: '1',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '2',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '3',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '4',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '5',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '6',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '7',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '8',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '9',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '0',  type: KEY_TYPES.NUMBER_KEY , isSelected: false },
                { symbol: '+',  type: KEY_TYPES.OPERATOR_KEY, isSelected: false },
                { symbol: '-',  type: KEY_TYPES.OPERATOR_KEY, isSelected: false },
                { symbol: '*',  type: KEY_TYPES.OPERATOR_KEY, isSelected: false },
                { symbol: '/',  type: KEY_TYPES.OPERATOR_KEY, isSelected: false },
            ],
            displayKeys: {
                [DISPLAY_SLOTS.OPERAND1]:'',
                [DISPLAY_SLOTS.OPERATOR]:'',
                [DISPLAY_SLOTS.OPERAND2]:''
            },
            result:'',
            draggingKey:{},
        }
    }

    selectCalculatorKey = (symbol) => {
        const calculatorKeys =  this.state.calculatorKeys.map(el => (el.symbol === symbol ? {...el, isSelected: !el.isSelected } : el));
        this.setState({calculatorKeys});
    };
    setDraggingKey = (key)=> {
        this.setState({
            draggingKey: {
                symbol: key.id,
                type: key.type
            }
        })
    };
    setDisplayKey =({symbol,displaySlot})=>{
        if(this.state.displayKeys[displaySlot] !== '' && this.state.displayKeys[displaySlot].symbol){
            this.selectCalculatorKey(this.state.displayKeys[displaySlot].symbol);
        }

        this.setState((prevState, props) => ({
            displayKeys: {                   // object that we want to update
                ...prevState.displayKeys,    // keep all other key-value pairs
                [displaySlot]: symbol === '' ? '' :  {  ...prevState.displayKeys[displaySlot] ,symbol}       // update the value of specific key
            },
            result: format(getResult( {                   // object that we want to update
                ...prevState.displayKeys,    // keep all other key-value pairs
                [displaySlot]: symbol === '' ? '' :  {  ...prevState.displayKeys[displaySlot] ,symbol}       // update the value of specific key
            }))
        }));
    };
    render() {
        return (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <div>
                <Title>DRAG AND DROP CALCULATOR</Title>
                <Keypad setDraggingKey={this.setDraggingKey} selectCalculatorKey={this.selectCalculatorKey} calculatorKeys={this.state.calculatorKeys} />
                <Display  draggingKey={this.state.draggingKey} result={this.state.result} setDisplayKey={this.setDisplayKey} displayKeys={this.state.displayKeys}  selectCalculatorKey={this.selectCalculatorKey}  />
                <Preview>
                    <GeneratePreview />
                </Preview>
            </div>
        </DndProvider>)
    }
}

export default Calculator;
