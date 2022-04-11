import React, { FC } from "react";

import styled from "styled-components";

import { toggleFilter } from "../../store/slices/todo-list-slice";
import { useTypedDispatch, useTypedSelector } from "../../store/utils";
import { Button } from "../../utils/types";

export const ItemStatusFilter: FC = () => {
  const dispatch = useTypedDispatch();

  const filter = useTypedSelector((state) => state.todoListReducer.filter);

  const buttons: Button[] = [
    { label: "All", key: "all" },
    { label: "Active", key: "active" },
    { label: "Done", key: "done" },
  ];

  const elements: JSX.Element[] = buttons.map((element) => {
    return (
      <FilterButton
        key={element.key}
        term={element.key}
        filter={filter}
        className="btn-small"
        onClick={() => dispatch(toggleFilter(element.key))}
      >
        {element.label}
      </FilterButton>
    );
  });

  return <Container>{elements}</Container>;
};

const Container = styled.div`
  margin: auto;
`;

interface FilterButtonProps {
  filter: string;
  term: string;
}

const FilterButton = styled.button<FilterButtonProps>`
  transition: 0.5s all;
  &:focus {
    background-color: cyan;
  }
  ${(props) =>
    props.filter === props.term
      ? `
    background-color: cyan;
    transform: scale(1.1);
    z-index: 5;
  `
      : ``};
`;
