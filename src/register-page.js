import React, { useCallback } from "react";
import { withRouter} from "react-router";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import app from "./base.js";
import './App.css';


const RegisterPage = ({ history }) => {
  const { register} = useForm();
  const handleRegisterPage = useCallback(async (event) => {
  event.preventDefault() 
  const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <div>
      <h1>Register page </h1>
      <form onSubmit={handleRegisterPage}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" ref={register()}/>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" ref={register()}/>
        </label>
        <input type ="submit" value ="Sign Up"/>
          <Link className="lnk" to='/login'>Already registered?</Link>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);
