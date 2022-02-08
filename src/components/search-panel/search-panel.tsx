import React, {FC} from "react";
import styled from "styled-components";

import {ItemStatusFilter} from "../item-status-filter/item-status-filter";

export const SearchPanel: FC = () => {
    return (
        <Container>
            <div className="input-field">
                <input placeholder="Type to search" id="search-input" type="text"/>
                <label className="active" htmlFor="search-input">Search</label>
            </div>
            <ItemStatusFilter/>
        </Container>
    );
};

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: 1fr / minmax(10rem, auto) minmax(5rem, max-content);
`;
