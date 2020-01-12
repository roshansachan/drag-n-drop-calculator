import {useDrop} from "react-dnd";
import KEY_TYPES from "../Calculator/constants";
import DISPLAY_SLOTS from "../Display/constants";
import Key from "./KeyDesign";
import ResetOverlay from './ResetOverlay';
import getNiceSymbol from "../services/nice_symbol";
import operandDefaultImg from "../Display/operand_default.png";
import operatorDefaultImg from "../Display/operator_default.png";
import React from "react";


export function Operand1({content,callSetDisplayKey,draggingKey,selectCalculatorKey}) {
    const [{ isOver,canDrop }, dropNumberKey] = useDrop({
        accept: KEY_TYPES.NUMBER_KEY,
        drop: (item,monitor) => {callSetDisplayKey({symbol:item.id, displaySlot: DISPLAY_SLOTS.OPERAND1});selectCalculatorKey(item.id);},
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    const disable = (draggingKey && draggingKey.type) && (draggingKey.type !== KEY_TYPES.NUMBER_KEY);
    const accepting = (draggingKey && draggingKey.type) && (draggingKey.type === KEY_TYPES.NUMBER_KEY);
    return (
        <Key
            type={KEY_TYPES.NUMBER_KEY}
            content={content}
            isEvenKey={(content*1) % 2 === 0}
            onClick={ ()=> { callSetDisplayKey({ symbol: '', displaySlot: DISPLAY_SLOTS.OPERAND1});selectCalculatorKey(content) } }
            isOver={isOver}
            accepting={accepting}
            canDrop={canDrop}
            disable={disable}

            ref={dropNumberKey} >
            { content ? getNiceSymbol(content) : <img src={operandDefaultImg} alt="drop symbol"/>}
            {content && <ResetOverlay className="resetOverlay" >Reset</ResetOverlay>  }
        </Key>
    )

}

export function Operator({content,callSetDisplayKey,draggingKey,selectCalculatorKey}) {
    const [{ isOver,canDrop }, dropOperatorKey] = useDrop({
        accept: KEY_TYPES.OPERATOR_KEY,
        // canDrop: (dragObj) => canMoveKey(dragObj),
        drop: (item,monitor) => {callSetDisplayKey({symbol:item.id, displaySlot: DISPLAY_SLOTS.OPERATOR});selectCalculatorKey(item.id);},
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    const disable = (draggingKey && draggingKey.type) && (draggingKey.type === KEY_TYPES.NUMBER_KEY);
    const accepting = (draggingKey && draggingKey.type) && (draggingKey.type === KEY_TYPES.OPERATOR_KEY)
    return (
        <Key onClick={ ()=> {callSetDisplayKey({symbol:'', displaySlot: DISPLAY_SLOTS.OPERATOR});selectCalculatorKey(content);}}
             type={KEY_TYPES.OPERATOR_KEY}
             isEvenKey={(content*1) % 2 === 0}
             isOver={isOver}
             accepting={accepting}
             content={content}
             isDark={( ['+','*'].indexOf(content) !== -1 )}
             canDrop={canDrop}
             disable={disable}
             ref={dropOperatorKey} >
            { content ? getNiceSymbol(content) : <img src={operatorDefaultImg} alt="drop symbol"/>}
            {content && <ResetOverlay className="resetOverlay" >Reset</ResetOverlay>  }
        </Key>
    )
}
export function Operand2({content,callSetDisplayKey,draggingKey,selectCalculatorKey}) {
    const [{ isOver,canDrop }, dropNumberKey] = useDrop({
        accept: KEY_TYPES.NUMBER_KEY,
        drop: (item,monitor) => {callSetDisplayKey({symbol:item.id, displaySlot: DISPLAY_SLOTS.OPERAND2});selectCalculatorKey(item.id);},
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })
    const disable = (draggingKey && draggingKey.type) && (draggingKey.type !== KEY_TYPES.NUMBER_KEY) ;
    const accepting = (draggingKey && draggingKey.type) && (draggingKey.type === KEY_TYPES.NUMBER_KEY);
    return (
        <Key onClick={ ()=> {callSetDisplayKey({symbol:'', displaySlot: DISPLAY_SLOTS.OPERAND2});selectCalculatorKey(content)}}
             content={content}
             type={KEY_TYPES.NUMBER_KEY}
             isEvenKey={(content*1) % 2 === 0}
             isOver={isOver}
             accepting={accepting}
             canDrop={canDrop}
             disable={disable}
             ref={dropNumberKey} >
            { content ? getNiceSymbol(content) : <img src={operandDefaultImg} alt="drop symbol"/>}
            {content && <ResetOverlay className="resetOverlay" >Reset</ResetOverlay>  }
        </Key>
    )
}