import React, {FC} from "react";
import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {toggleProperty, deleteItem} from "../../store/slices/todo-list-slice";

import {TodoListElementProps} from "../../utils/interfaces";

export const TodoListElement: FC<TodoListElementProps> = (props) => {

    const dispatch = useTypedDispatch();

    let classNames: string[] = [];

    if(props.important) {
        classNames.push('important');
    }
    if(props.done) {
        classNames.push('done');
    }

    return (
        <>
            <input type="checkbox" checked={props.done} readOnly={true}/>
            <span id="item-label" className={classNames.join(' ')}>{props.label}</span>
            <div>
                <Button
                    className="btn deep-purple lighten-1"
                    onClick={() => dispatch(toggleProperty({id: props.id, property: `important`}))}>
                    <i className="material-icons">priority_high</i>
                </Button>
                <Button
                    className="btn green"
                    onClick={() => dispatch(toggleProperty({id: props.id, property: `done`}))}>
                    <i className="material-icons">check</i>
                </Button>
                <Button
                    className="btn red darken-1"
                    onClick={() => dispatch(deleteItem(props.id))}>
                    <i className="material-icons">clear</i>
                </Button>
            </div>
        </>
    );
};

const Button = styled.button`
  margin-left: 0.1rem;
  transition: 0.1s all;
  &:active {
    transform: scale(0.9);
    z-index: 5;
  }
`;
