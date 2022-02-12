import React, {FC, useEffect} from "react";
import styled from "styled-components";

import {useTypedSelector, useTypedDispatch} from "../../store/utils";
import {loadData} from "../../store/slices/todo-list-slice";

import {TodoListItem} from "../../utils/interfaces";

import {Header} from "../header/header";
import {SearchPanel} from "../search-panel/search-panel";
import {TodoList} from "../todo-list/todo-list";
import {ItemAddForm} from "../item-add-form/item-add-form";

export const App: FC = () => {

    const dispatch = useTypedDispatch();

    const todoData = useTypedSelector(state => state.todoListReducer.data);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('savedData') || '[]') as TodoListItem[];
        dispatch(loadData(savedData));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('savedData', JSON.stringify(todoData))
    }, [todoData]);

    return (
        <>
            <Header/>
            <Container>
                <SearchPanel/>
                <TodoList/>
                <ItemAddForm/>
            </Container>
        </>
    );
};

const Container = styled.div`
  max-width: 900px;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;
`;
