import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {TodoListItem} from "../../utils/types";

import {TodoListElement} from "../todo-list-item/todo-list-element";

export const TodoList: FC = () => {
    const todoData = useTypedSelector(state => state.todoListReducer.data);
    const filter = useTypedSelector(state => state.todoListReducer.filter);
    const search = useTypedSelector(state => state.todoListReducer.search);

    const filterData = (data: TodoListItem[], filter: string) => {
        switch (filter){
            case 'all':
                return data;
            case 'active':
                return data.filter(item => !item.done);
            case 'done':
                return data.filter(item => item.done);
            default:
                return data;
        }
    };

    const searchData = (data: TodoListItem[], search: string) => {
        if (search) {
            return data.filter(item => item.label.toLowerCase().indexOf(search.toLowerCase()) > -1);
        } else {
            return data;
        }
    };

    const visibleData = searchData(filterData(todoData, filter), search);

    const elements = visibleData!.map((element) => {
        return (
            <Li key={element.id} className="collection-item">
                <TodoListElement {...element}/>
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
  [type="checkbox"]+span:not(.lever) {
    font-size: 1.5rem;
  };
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;
