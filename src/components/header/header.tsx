import React, {FC} from "react";
import styled from "styled-components";
import {useTypedSelector} from "../../store/utils";

export const Header: FC = () => {

    const todoData = useTypedSelector(state => state.todoListReducer.data);

    const doneCount: number = todoData.filter(element => element.done).length;
    const todoCount: number = todoData.filter(element => !element.done).length;

    return (
        <nav>
            <Wrapper className="nav-wrapper purple">
                <a href="/" className="brand-logo">My ToDo List</a>
                <Icon className="large material-icons">assignment</Icon>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>{doneCount} Done, {todoCount} more to do</li>
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
