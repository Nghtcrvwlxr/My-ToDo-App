import React, { FC } from "react";

import styled from "@emotion/styled";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, Checkbox } from "@mui/material";

import { deleteItem, toggleProperty } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";

interface TodoListElementProps {
  id: number;
  label: string;
  important: boolean;
  done: boolean;
}

export const TodoListElement: FC<TodoListElementProps> = ({
  id,
  label,
  important,
  done,
}) => {
  const dispatch = useTypedDispatch();

  return (
    <Li>
      <ItemLabel>
        <Checkbox
          checked={done}
          color="default"
          onClick={() => dispatch(toggleProperty({ id, property: `done` }))}
        />
        <Span important={important} done={done} highlight="#d500f9">
          {label}
        </Span>
      </ItemLabel>
      <ButtonsWrapper>
        <ListItemButton
          variant="contained"
          color="primary"
          onClick={() =>
            dispatch(toggleProperty({ id, property: `important` }))
          }
        >
          <PriorityHighIcon fontSize="inherit" />
        </ListItemButton>
        <ListItemButton
          variant="contained"
          color="success"
          onClick={() => dispatch(toggleProperty({ id, property: `done` }))}
        >
          <DoneIcon fontSize="inherit" />
        </ListItemButton>
        <ListItemButton
          variant="contained"
          color="error"
          onClick={() => dispatch(deleteItem(id))}
        >
          <ClearIcon fontSize="inherit" />
        </ListItemButton>
      </ButtonsWrapper>
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 25px;
  border: 1px solid darkgray;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.075),
    rgba(255, 255, 255, 0.075)
  );
  :not(:last-child) {
    border-bottom: none;
  }
  :first-of-type {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  :last-of-type {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    padding: 0.5rem 1rem;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    padding: 0.5rem;
  }
`;

const ItemLabel = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

interface SpanProps {
  important: boolean;
  done: boolean;
  highlight: string;
}

const Span = styled.span<SpanProps>`
  word-break: break-word;
  ${({ important, highlight }) =>
    important &&
    `
    font-weight: bold;
    color: ${highlight};
  `};
  ${({ done }) =>
    done &&
    `
    text-decoration: line-through;
    color: gray;
  `};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
`;

const ListItemButton = styled(Button)`
  min-width: max-content;
  margin: 0.1rem;
  padding: 8px 12px;
  font-size: 25px;
  transition: 0.1s all;
  :first-of-type {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    );
  }
  &:active {
    transform: scale(0.9);
    z-index: 5;
  }
  @media (max-width: 600px) {
    padding: 6px 8px;
    font-size: 20px;
  }
  @media (max-width: 375px) {
    padding: 3px 5px;
  }
`;
