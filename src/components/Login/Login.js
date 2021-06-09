import React from "react";
import s from './Login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", 'login', [requiredField], Input)}
            {createField("Password", 'pass', [requiredField], Input)}
            {createField(null, 'rememberMe', [], Input,{type: 'checkbox'}, "remember me")}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({auth, isAuth}) => {
    const onSubmit = (formData) => {
        auth({
            email: formData.login,
            password: formData.pass,
            rememberMe: formData.rememberMe
        });
    }
    if (isAuth) return <Redirect to={"/profile/"}/>
    return (
        <div className={s.main}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;