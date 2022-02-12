import React, {FC, useState} from "react";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {validateLoginDetails} from "../../store/slices/login-form-slice";

export const LoginPage: FC = () => {

    const dispatch = useTypedDispatch();

    const loginData = useTypedSelector(state => state.loginFormReducer);

    const [email, setEmail] = useState('');
    const onEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };
    const [password, setPassword] = useState('');
    const onPasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(validateLoginDetails({email, password}));
        setEmail('');
        setPassword('');
    };


    if (loginData.isLoggedIn) {
        return <h3 className="center-align">Welcome, {loginData.username}</h3>
    }
    return (
        <>
            <h3 className="center-align">Login Page</h3>
            <div className="row">
                <form className="col s12" onSubmit={onFormSubmit}>
                    <div className="container">
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter your email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={onEmailInputChange}/>
                            <label className="active" htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter your password"
                                id="password"
                                type="password"
                                value={password}
                                onChange={onPasswordInputChange}/>
                            <label className="active" htmlFor="password">Password</label>
                        </div>
                        <button
                            className="btn"
                            type="submit"
                            name="action">
                            Login
                            <i className="material-icons right">chevron_right</i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
