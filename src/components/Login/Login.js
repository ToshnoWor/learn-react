import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} type="text" placeholder={"Login"} name={"login"}/>
            </div>
            <div>
                <Field component={"input"} type="text" placeholder={"Password"} name={"pass"}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"}/> remember me
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
        if (formData.rememberMe)
            props.auth({
                email: formData.login,
                password: formData.pass
            });
    }

    return (
        <div className={s.main}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;