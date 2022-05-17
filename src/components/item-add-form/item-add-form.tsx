import React, { FC, useState } from "react";

import styled from "@emotion/styled";
import { Box, Button, TextField, useTheme } from "@mui/material";

import { addItem } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";

export const ItemAddForm: FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const [title, setTitle] = useState("");

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setTitle(event.target.value);
  };

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    dispatch(addItem(title));
    setTitle("");
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={onFormSubmit}>
      <Wrapper>
        <AddFormTextField
          id="outlined-basic"
          label="What needs to be done?"
          variant="outlined"
          color="secondary"
          type="text"
          fullWidth
          value={title}
          onChange={onInputChange}
        />
        <AddFormButton
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.info.main,
            },
          }}
        >
          Add
        </AddFormButton>
      </Wrapper>
    </Box>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 1rem;
  @media (max-width: 425px) {
    gap: 0.5rem;
  }
`;

const AddFormTextField = styled(TextField)`
  font-size: 0.5rem;
`;

const AddFormButton = styled(Button)`
  @media (max-width: 425px) {
    padding: 4px 8px;
    font-size: 14px;
  }
`;
