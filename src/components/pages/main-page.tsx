import React, {FC} from "react";

import {SearchPanel} from "../search-panel/search-panel";
import {TodoList} from "../todo-list/todo-list";
import {ItemAddForm} from "../item-add-form/item-add-form";

export const MainPage: FC = () => {
    return (
        <>
            <SearchPanel/>
            <TodoList/>
            <ItemAddForm/>
        </>
    );
};
