import React, { FC } from "react";

import styled from "styled-components";

import { deleteItem, toggleProperty } from "../../store/slices/todo-list-slice";
import { useTypedDispatch } from "../../store/utils";
import { TodoListElementProps } from "../../utils/types";

export const TodoListElement: FC<TodoListElementProps> = ({
  id,
  label,
  important,
  done,
}) => {
  const dispatch = useTypedDispatch();

  return (
    <>
      <input type="checkbox" checked={done} readOnly />
      <Span important={important} done={done}>
        {label}
      </Span>
      <div>
        <Button
          className="btn deep-purple lighten-1"
          onClick={() =>
            dispatch(toggleProperty({ id, property: `important` }))
          }
        >
          <i className="material-icons">priority_high</i>
        </Button>
        <Button
          className="btn green"
          onClick={() => dispatch(toggleProperty({ id, property: `done` }))}
        >
          <i className="material-icons">check</i>
        </Button>
        <Button
          className="btn red darken-1"
          onClick={() => dispatch(deleteItem(id))}
        >
          <i className="material-icons">clear</i>
        </Button>
      </div>
    </>
  );
};

const Button = styled.button`
  margin-left: 0.1rem;
  transition: 0.1s all;
  &:active {
    transform: scale(0.9);
    z-index: 5;
  }
`;

interface SpanProps {
  important: boolean;
  done: boolean;
}

const Span = styled.span<SpanProps>`
  ${(props) =>
    props.important
      ? `
    font-weight: bold;
    color: #7e57c2;
  `
      : ``};
  ${(props) =>
    props.done
      ? `
    text-decoration: line-through;
    color: #9e9e9e;
  `
      : ``};
`;
