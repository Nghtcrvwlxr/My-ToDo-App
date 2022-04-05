import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TodoListItem, TodoListState } from "../../utils/types";

const initialState: TodoListState = {
  filter: "all",
  search: "",
  data: [
    //        {id: 1, label: 'Learn React', important: false, done: true},
    //        {id: 2, label: 'Learn Redux', important: false, done: false},
    //        {id: 3, label: 'Learn TypeScript', important: true, done: false},
  ],
};

const todoListSlice = createSlice({
  name: "todoListReducer",
  initialState,
  reducers: {
    loadData(state, action: PayloadAction<TodoListItem[]>) {
      state.data = action.payload;
    },
    addItem(state, action: PayloadAction<string>) {
      if (action.payload.trim().length > 3) {
        let newId: number;
        if (!state.data.length) {
          newId = 1;
        } else {
          newId = state.data[state.data.length - 1].id + 1;
        }
        const newItem = {
          id: newId,
          label: action.payload,
          important: false,
          done: false,
        };
        state.data.push(newItem);
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      const confirmation: boolean = window.confirm(
        `Are you sure you want to delete this item?`
      );
      if (confirmation) {
        state.data = state.data.filter((item) => {
          return item.id !== action.payload;
        });
      }
    },
    toggleProperty(
      state,
      action: PayloadAction<{ id: number; property: string }>
    ) {
      const index = state.data.findIndex(
        (element) => element.id === action.payload.id
      );
      if (action.payload.property === "important")
        state.data[index].important = !state.data[index].important;
      if (action.payload.property === "done")
        state.data[index].done = !state.data[index].done;
    },
    toggleFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    updateSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { reducer: todoListReducer } = todoListSlice;

export const {
  loadData,
  addItem,
  deleteItem,
  toggleProperty,
  toggleFilter,
  updateSearch,
} = todoListSlice.actions;
