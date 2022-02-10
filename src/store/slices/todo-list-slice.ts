import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";

interface TodoListState {
    data: TodoListItem[];
}

interface TodoListItem {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}

const initialState: TodoListState = {
    data: [
        {id: 1, label: 'Learn React', important: false, done: true},
        {id: 2, label: 'Learn Redux', important: false, done: false},
        {id: 3, label: 'Learn TypeScript', important: true, done: false},
    ],
};

const todoListSlice = createSlice({
    name: 'todoListReducer',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>) {
            if (action.payload.trim().length > 3) {
                let newId;
                if (!current(state).data.length) {
                    newId = 1;
                } else {
                    newId =  current(state).data[current(state).data.length - 1].id + 1;
                }
                const newItem = {
                    id: newId,
                    label: action.payload,
                    important: false,
                    done: false,
                }
                state.data.push(newItem);
            }
        },
        deleteItem(state, action: PayloadAction<number>) {
            state.data = state.data.filter((item) => {
                return item.id !== action.payload;
            });
        },
        toggleProperty(state, action: PayloadAction<{id: number, property: string}>) {
            const index = action.payload.id - 1;
            if (action.payload.property === 'important') state.data[index].important = !state.data[index].important;
            if (action.payload.property === 'done') state.data[index].done = !state.data[index].done;
        },
    },
});

export const {reducer: todoListReducer} = todoListSlice;

export const {addItem, deleteItem, toggleProperty} = todoListSlice.actions;
