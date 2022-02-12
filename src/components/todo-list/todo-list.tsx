import React, {FC} from "react";
import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {TodoListItem} from "../../utils/interfaces";

import {TodoListElement} from "../todo-list-item/todo-list-element";

export const TodoList: FC = () => {

    const todoData = useTypedSelector(state => state.todoListReducer.data);
    const filter = useTypedSelector(state => state.todoListReducer.filter);
    const search = useTypedSelector(state => state.todoListReducer.search);

    const filterData = (data: TodoListItem[], filter: string): TodoListItem[] => {
        if (filter === 'all') {
            return data;
        }
        if (filter === 'active') {
            return data.filter(item => !item.done);
        }
        if (filter === 'done') {
            return data.filter(item => item.done);
        }
        return data;
    };

    const searchData = (data: TodoListItem[], search: string): TodoListItem[] => {
        if (search) {
            return data.filter(item => item.label.toLowerCase().indexOf(search.toLowerCase()) > -1);
        } else {
            return data;
        }
    };

    const visibleData = searchData(filterData(todoData, filter), search);

    const elements = visibleData!.map((element) => {
        const {...itemProps} = element;
        return (
            <Li key={element.id} className="collection-item">
                <TodoListElement {...itemProps}/>
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
`;
