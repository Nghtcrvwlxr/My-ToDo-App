import React, {FC} from "react";
import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

export const AppFooter: FC = () => {

    const isLogged = useTypedSelector(state => state.loginFormReducer.isLoggedIn);
    const username = useTypedSelector(state => state.loginFormReducer.username);

    const userDetails = (loginDetails: boolean, username: string) => {
        if (isLogged) {
            if (username === 'aleks') {
                return 'Welcome back, Aleks!';
            } else {
                return 'Unknown user';
            }
        }
        return 'Please login to get access to Information page';
    }

    return (
        <Footer className="page-footer teal lighten-1">
                <span>{userDetails(isLogged, username)}</span>
        </Footer>
    );
};

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1.5rem 5rem;
  height: 5rem;
  font-size: 1.5rem;
`;
