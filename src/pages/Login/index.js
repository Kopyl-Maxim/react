import React, {useContext, useCallback} from "react";
import {withRouter, Redirect} from "react-router";
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom';
import firebase from "../../Base";
import {AuthContext} from "../../Auth";

const Login = ({history}) => {
    const {register} = useForm();
    const handleLogin = useCallback(async (event) => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                localStorage.setItem('email', email.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" ref={register()}/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" ref={register()}/>
                </label>
                <input type="submit" value="sign in"/>
                <Link className="lnk" to='/RegisterPage'>Register</Link>
            </form>
        </div>
    );
};

export default withRouter(Login);
