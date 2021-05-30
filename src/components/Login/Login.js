import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

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
                       validate={[requiredField]}
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