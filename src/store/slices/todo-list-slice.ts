import {createSlice} from "@reduxjs/toolkit";

interface TodoListState {
    maxId: number
    data: Array<{id: number, label: string}>
}

interface TodoListItem {
    id: number
    label: string
}

const initialState: TodoListState = {
    maxId: 3,
    data: [
        {id: 1, label: 'Learn React'},
        {id: 2, label: 'Learn Redux'},
        {id: 3, label: 'Learn TypeScript'}
    ]
};

const todoListSlice = createSlice({
    name: 'todoListReducer',
    initialState,
    reducers: {
        addItem(state, action: {type: string, payload: string}) {
            if (action.payload.replace(/\s/g, '')) {
                state.maxId++;
                const newItem: TodoListItem = {
                    id: state.maxId,
                    label: action.payload
                }
                state.data.push(newItem);
            }
        },
        deleteItem(state, action: {type: string, payload: number}) {
            state.data = state.data.filter((item) => {
                return item.id !== action.payload
            });
        }
    }
});

export const {reducer: todoListReducer} = todoListSlice;

export const {addItem, deleteItem} = todoListSlice.actions;
