import React, { FC, useState } from "react";
import styled from "styled-components";

import { updateSearch } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";
import { ItemStatusFilter } from "../item-status-filter/item-status-filter";

export const SearchPanel: FC = () => {
  const dispatch = useTypedDispatch();

  const [title, setTitle] = useState("");

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
    dispatch(updateSearch(event.target.value));
  };

  return (
    <Container>
      <div className="input-field">
        <input
          placeholder="Type to search"
          id="search-input"
          type="text"
          value={title}
          onChange={onInputChange}
        />
        <label className="active" htmlFor="search-input">
          Search
        </label>
      </div>
      <ItemStatusFilter />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: 1fr / minmax(10rem, auto) minmax(5rem, max-content);
`;
