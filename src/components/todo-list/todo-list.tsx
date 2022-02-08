import React, {FC} from "react";
import styled from "styled-components";

import {TodoListItem} from "../todo-list-item/todo-list-item";

export const TodoList: FC = () => {
    return (
        <ul className="collection with-header">
            <Li className="collection-item">
                <TodoListItem/>
            </Li>
            <Li className="collection-item">
                <TodoListItem/>
            </Li>
            <Li className="collection-item">
                <TodoListItem/>
            </Li>
        </ul>
    );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;
