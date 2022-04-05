import React, { FC } from "react";

import { ItemAddForm } from "../item-add-form/item-add-form";
import { SearchPanel } from "../search-panel/search-panel";
import { TodoList } from "../todo-list/todo-list";

export const MainPage: FC = () => {
  return (
    <>
      <SearchPanel />
      <TodoList />
      <ItemAddForm />
    </>
  );
};
