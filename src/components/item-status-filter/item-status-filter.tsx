import React, {FC} from "react";
import styled from "styled-components";

export const ItemStatusFilter: FC = () => {
    return (
        <Container>
            <Button className="btn-small">All</Button>
            <Button className="btn-small">Active</Button>
            <Button className="btn-small">Done</Button>
        </Container>
    );
};

const Container = styled.div`
  margin: auto;
`;

const Button = styled.button`
  transition: 0.5s all;
  &:hover {
    background-color: teal;
  }
  &:focus {
    background-color: cyan;
    transform: scale(1.1);
    z-index: 5;
  }
`;
