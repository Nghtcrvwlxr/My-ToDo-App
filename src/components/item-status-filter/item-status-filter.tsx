import React, {FC} from "react";
import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {toggleFilter} from "../../store/slices/todo-list-slice";

import {Button} from "../../utils/interfaces";

export const ItemStatusFilter: FC = () => {

    const dispatch = useTypedDispatch();

    const filter = useTypedSelector(state => state.todoListReducer.filter);

    const buttons: Button[] = [
        {label: 'All', key: 'all'},
        {label: 'Active', key: 'active'},
        {label: 'Done', key: 'done'},
    ];

    const elements: JSX.Element[] = buttons.map((element) => {
        const classNames: string = 'btn-small ' + (filter === element.key ? 'active' : '');
        return (
            <button key={element.label}
                    className={classNames}
                    onClick={() => dispatch(toggleFilter(element.key))}>{element.label}</button>
        );
    });

    return (
        <Container>
            {elements}
        </Container>
    );
};

const Container = styled.div`
  margin: auto;
`;
