import React, {FC, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import styled from "styled-components";

import {useTypedSelector, useTypedDispatch} from "../../store/utils";
import {loadData} from "../../store/slices/todo-list-slice";

import {TodoListItem} from "../../utils/interfaces";

import {Header} from "../header/header";
import {MainPage} from "../pages/main-page";
import {InfoPage} from "../pages/info-page";
import {LoginPage} from "../pages/login-page";

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
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/info" element={<InfoPage/>}/>
                    <Route path="*" element={<h3 className='center-align'>This page does not exist</h3>}/>
                </Routes>
            </Container>
        </>
    );
};

const Container = styled.div`
  max-width: 900px;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;
`;
