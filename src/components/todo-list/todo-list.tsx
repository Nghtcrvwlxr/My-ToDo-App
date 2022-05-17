import React, { FC } from "react";

import styled from "@emotion/styled";

import { useTypedSelector } from "../../store/utils";
import { TodoListElementTemplate } from "../../utils/types";
import { TodoListElement } from "../todo-list-element/todo-list-element";

export const TodoList: FC = () => {
  const todoData = useTypedSelector(state => state.todoListReducer.data);
  const filter = useTypedSelector(state => state.todoListReducer.filter);
  const search = useTypedSelector(state => state.todoListReducer.search);

  const filterData = (
    data: TodoListElementTemplate[],
    filterString: string,
  ) => {
    switch (filterString) {
      case "all":
        return data;
      case "active":
        return data.filter(item => !item.done);
      case "done":
        return data.filter(item => item.done);
      default:
        return data;
    }
  };

  const searchData = (
    data: TodoListElementTemplate[],
    searchString: string,
  ) => {
    if (searchString) {
      return data.filter(
        item =>
          item.label.toLowerCase().indexOf(searchString.toLowerCase()) > -1,
      );
    }
    return data;
  };

  const visibleData = searchData(filterData(todoData, filter), search);

  const elements = visibleData.map(element => (
    <TodoListElement key={element.id} {...element} />
  ));

  if (todoData.length <= 0) {
    return (
      <Ul>
        <li>Add something that needs to be done</li>
      </Ul>
    );
  }

  return <Ul>{elements}</Ul>;
};

const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
`;
