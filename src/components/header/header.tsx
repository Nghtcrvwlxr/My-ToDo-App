import React, {FC} from "react";
import styled from "styled-components";

export const Header: FC = () => {
    return (
        <nav>
            <Wrapper className="nav-wrapper purple">
                <a href="/" className="brand-logo">My ToDo List</a>
                <Icon className="large material-icons">assignment</Icon>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>0 Done, 3 more to do</li>
                    <li><Button href="/">About me</Button></li>
                </ul>
            </Wrapper>
        </nav>
    );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0 5rem;
`;

const Button = styled.a`
  margin-left: 1rem;
  &:hover {
    background-color: cyan;
  }
`;

const Icon = styled.i`
  position: absolute;
  left: 1rem;
`;
