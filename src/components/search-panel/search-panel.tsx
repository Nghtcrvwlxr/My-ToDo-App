import React, { FC, useState } from "react";

import styled from "@emotion/styled";
import { TextField } from "@mui/material";

import { updateSearch } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";
import { ItemStatusFilter } from "../item-status-filter/item-status-filter";

export const SearchPanel: FC = () => {
  const dispatch = useTypedDispatch();
  const [term, setTerm] = useState("");

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTerm(event.target.value);
    dispatch(updateSearch(event.target.value));
  };

  return (
    <Container>
      <TextField
        id="search-field"
        label="Search"
        variant="standard"
        color="secondary"
        autoComplete="off"
        fullWidth
        value={term}
        onChange={onInputChange}
      />
      <ItemStatusFilter />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
