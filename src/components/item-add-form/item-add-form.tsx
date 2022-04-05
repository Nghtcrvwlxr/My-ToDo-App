import React, { FC, useState } from "react";
import styled from "styled-components";

import { addItem } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";

export const ItemAddForm: FC = () => {
  const dispatch = useTypedDispatch();

  const [title, setTitle] = useState("");

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(addItem(title));
    setTitle("");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        onChange={onInputChange}
        placeholder="What needs to be done?"
        id="add_input"
        type="text"
        value={title}
        className="validate"
      />
      <Button className="btn btn-large">Add</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: auto;
  flex-grow: 1;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 1rem;
  transition: 0.5s all;
  &:hover {
    background-color: teal;
  }
`;
