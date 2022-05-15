import React, { FC } from "react";

import styled from "@emotion/styled";
import { ButtonGroup, Button, ButtonBaseProps, useTheme } from "@mui/material";

import { toggleFilter } from "../../store/slices/todo-list-slice";
import { useTypedDispatch, useTypedSelector } from "../../store/utils";
import { StatusButtonTemplate } from "../../utils/types";

export const ItemStatusFilter: FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const filter = useTypedSelector((state) => state.todoListReducer.filter);

  const buttons: StatusButtonTemplate[] = [
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
        hovercolor={theme.palette.info.dark}
        activecolor={theme.palette.info.main}
        onClick={() => dispatch(toggleFilter(element.key))}
      >
        {element.label}
      </FilterButton>
    );
  });

  return (
    <Container>
      <ButtonGroup
        variant="contained"
        color="secondary"
        size="medium"
        aria-label="button group"
      >
        {elements}
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
`;

interface FilterButtonProps extends ButtonBaseProps {
  filter: string;
  term: string;
  hovercolor: string;
  activecolor: string;
}

const FilterButton = styled(Button)<FilterButtonProps>`
  transition: 0.5s all;
  outline: 1px solid dimgray;
  ${(props) =>
    props.filter === props.term &&
    `
    background-color: ${props.activecolor};
    transform: scale(1.1);
    z-index: 5;
  `};
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 8px;
  }
  @media (max-width: 425px) {
    padding: 6px 14px;
  }
`;
