import {combineReducers} from "@reduxjs/toolkit";
import {sortObjKeysAlphabetically} from "../utils/sort-object-keys";

import {todoListReducer} from "./slices/todo-list-slice";
import {loginFormReducer} from "./slices/login-form-slice";

const reducers = {todoListReducer, loginFormReducer};

const sortedReducers = sortObjKeysAlphabetically(reducers);

export const rootReducer = combineReducers(
    sortedReducers
);

export type RootState = ReturnType<typeof rootReducer>;
