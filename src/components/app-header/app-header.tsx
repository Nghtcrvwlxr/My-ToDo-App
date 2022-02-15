import React, {FC} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

export const AppHeader: FC = () => {
    const todoData = useTypedSelector(state => state.todoListReducer.data);

    const doneCount = todoData.filter(element => element.done).length;
    const todoCount = todoData.filter(element => !element.done).length;

    return (
        <header>
            <nav>
                <Wrapper className="nav-wrapper purple">
                    <Link to="/" className="brand-logo">My ToDo List</Link>
                    <Icon className="large material-icons">assignment</Icon>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>{doneCount} Done, {todoCount} more to do</li>
                        <li>
                            <Button>
                                <Link to="info">Information</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to="login">Login</Link>
                            </Button>
                        </li>
                    </ul>
                </Wrapper>
            </nav>
        </header>
    );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0 5rem;
`;

const Button = styled.div`
  transition: 0.5s all;
  margin-left: 1rem;
  &:hover {
    background-color: cyan;
  }
`;

const Icon = styled.i`
  position: absolute;
  left: 1rem;
`;
