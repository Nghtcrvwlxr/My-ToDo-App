import React, {FC} from "react";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../../store/utils";

export const InfoPage: FC = () => {

    const isLoggedIn = useTypedSelector(state => state.loginFormReducer.isLoggedIn);

    if (isLoggedIn) {
        return (
            <h3>Information Page</h3>
        );
    }
    return <Navigate to='/login'/>
};
