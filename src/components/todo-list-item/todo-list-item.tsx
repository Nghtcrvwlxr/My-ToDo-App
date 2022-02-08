import React, {FC} from "react";
import styled from "styled-components";

export const TodoListItem: FC = () => {
    return (
        <>
            <span>Item</span>
            <div>
                <Button className="btn deep-purple lighten-1">
                    <i className="material-icons">priority_high</i>
                </Button>
                <Button className="btn green">
                    <i className="material-icons">check</i>
                </Button>
                <Button className="btn red darken-1">
                    <i className="material-icons">clear</i>
                </Button>
            </div>
        </>
    );
};

const Button = styled.button`
  transition: 0.1s all;
  &:active {
    transform: scale(0.9);
    z-index: 5;
  }
`;
