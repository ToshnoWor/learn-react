import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="text" placeholder={"Login"} name={"login"}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input} type="text" placeholder={"Password"} name={"pass"}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input} type="checkbox" name={"rememberMe"}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.auth({
            email: formData.login,
            password: formData.pass,
            rememberMe: formData.rememberMe
        });
    }
    if (props.isAuth) return <Redirect to={"/profile/"}/>
    return (
        <div className={s.main}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;