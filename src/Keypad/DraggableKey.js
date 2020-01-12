import React  from "react";
import styled from 'styled-components';
import KEY_TYPES from '../Calculator/constants';
import { useDrag } from 'react-dnd';
import KeyDesign from './KeyDesign';
import getNiceSymbol from '../services/nice_symbol';
const NumberKeyPreview = styled.div`
transform: scale( ${ (props) => props.scale ? props.scale : 1  }  ) !important;
`;
const OperatorKeyPreview = styled.div`
transform: scale( ${ (props) => props.scale ? props.scale : 1  }  ) !important;
`;


export default function (props){
    const checkDraggingKey =  (theKey)=>{
        const key = theKey.getItem();
        props.setDraggingKey(key);
    };
    const resetDraggingKey=()=>{
        props.setDraggingKey({});
    };
    const canDrag=(monitor)=>{
        return !props.isSelected;
    }
    const [{isDraggingNumber,numberKeyScale}, dragNumberKey,previewNumberKey] = useDrag({
        item: { type: KEY_TYPES.NUMBER_KEY, id:props.symbol },
        canDrag: (monitor)=> canDrag(monitor),
        end: (item, monitor)=>{ resetDraggingKey() },
        isDragging:(dragSourceMonitor)=>{  checkDraggingKey(dragSourceMonitor) },
        collect: monitor => ({
            isDraggingNumber: !!monitor.isDragging(),
            numberKeyScale: monitor.isDragging() ? 5 : 1,
        }),
    });
    const [{isDraggingOperator, operatorKeyScale}, dragOperatorKey,previewOperatorKey] = useDrag({
        item: { type: KEY_TYPES.OPERATOR_KEY,id:props.symbol },
        canDrag: (monitor)=> canDrag(monitor),
        end: (item, monitor)=>{ resetDraggingKey() },
        isDragging:(dragSourceMonitor)=>{  checkDraggingKey(dragSourceMonitor) },
        collect: (monitor,props) => ({
            isDraggingOperator: !!monitor.isDragging(),
            operatorKeyScale: monitor.isDragging() ? 5 : 1
        }),
    });

    if(props.type === KEY_TYPES.NUMBER_KEY){
        return <NumberKeyPreview ref={previewNumberKey} scale={numberKeyScale}>
            <KeyDesign
                isEvenKey={(props.symbol*1) % 2 === 0}
                type={KEY_TYPES.NUMBER_KEY}
                isDragging={isDraggingNumber}
                ref={dragNumberKey}
                isDisabled={props.isSelected} >
                {props.symbol}
            </KeyDesign>
        </NumberKeyPreview>

    }
    if(props.type === KEY_TYPES.OPERATOR_KEY){
        return <OperatorKeyPreview ref={previewOperatorKey}  scale ={operatorKeyScale}>
            <KeyDesign
                isDark={( ['+','*'].indexOf(props.symbol) !== -1 )}
                type={KEY_TYPES.OPERATOR_KEY}
                isDragging={isDraggingOperator}
                ref={dragOperatorKey}
                isDisabled={props.isSelected} >
                {getNiceSymbol(props.symbol)}
            </KeyDesign>
        </OperatorKeyPreview>
    }
}