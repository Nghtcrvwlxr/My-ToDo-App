import React, {FC} from "react";
import styled from "styled-components";

import {TodoListItem} from "../todo-list-item/todo-list-item";
import {useTypedSelector} from "../../store/utils";

export const TodoList: FC = () => {

    const todoData = useTypedSelector(state => state.todoListReducer.data);

    const elements = todoData.map((element) => {
        return (
            <Li key={element.id} className="collection-item">
                <TodoListItem id={element.id} label={element.label}/>
            </Li>
        );
    });

    if (todoData.length <= 0) {
        return (
            <ul className="collection with-header">
                <Li className="collection-item">
                    Add something that needs to be done
                </Li>
            </ul>
        );
    }

    return (
        <ul className="collection with-header">
            {elements}
        </ul>
    );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;
