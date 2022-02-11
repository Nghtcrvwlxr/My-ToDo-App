import React, {FC} from "react";
import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {toggleFilter} from "../../store/slices/todo-list-slice";

interface Button {
    label: string,
    key: string,
}

export const ItemStatusFilter: FC = () => {

    const dispatch = useTypedDispatch();

    const filter = useTypedSelector(state => state.todoListReducer.filter);

    const buttons: Button[] = [
        {label: 'All', key: 'all'},
        {label: 'Active', key: 'active'},
        {label: 'Done', key: 'done'},
    ];

    const elements = buttons.map((element) => {
        const classNames = 'btn-small ' + (filter === element.key ? 'active' : '');
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
