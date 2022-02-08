import React, {FC} from "react";
import styled from "styled-components";

import {Header} from "../header/header";
import {SearchPanel} from "../search-panel/search-panel";
import {TodoList} from "../todo-list/todo-list";
import {ItemAddForm} from "../item-add-form/item-add-form";

export const App: FC = () => {
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
