import React, { FC } from "react";

import { ItemAddForm } from "../components/item-add-form/item-add-form";
import { SearchPanel } from "../components/search-panel/search-panel";
import { TodoList } from "../components/todo-list/todo-list";

export const MainPage: FC = () => {
  return (
    <>
      <SearchPanel />
      <TodoList />
      <ItemAddForm />
    </>
  );
};
