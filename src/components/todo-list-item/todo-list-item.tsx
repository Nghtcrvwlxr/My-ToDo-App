import React, {FC} from "react";
import styled from "styled-components";
import {useTypedDispatch} from "../../store/utils";
import {toggleProperty, deleteItem} from "../../store/slices/todo-list-slice";

type Props = {
    id: number,
    label: string,
    important: boolean,
    done: boolean,
};

export const TodoListItem: FC<Props> = (props) => {

    const dispatch = useTypedDispatch();

    let classNames: string = '';

    if(props.important) {
        classNames += ' important';
    }
    if(props.done) {
        classNames += ' done';
    }

    return (
        <>
            <span className={classNames}>{props.label}</span>
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
  transition: 0.1s all;
  &:active {
    transform: scale(0.9);
    z-index: 5;
  }
`;
