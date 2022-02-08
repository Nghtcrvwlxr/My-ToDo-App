import {createSlice} from "@reduxjs/toolkit";

interface TodoListState {}

const initialState: TodoListState = {};

const todoListSlice = createSlice({
    name: 'todoListReducer',
    initialState,
    reducers: {}
});

export const {reducer: todoListReducer} = todoListSlice;
