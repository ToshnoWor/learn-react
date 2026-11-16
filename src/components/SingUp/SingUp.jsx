import React from "react";
import s from './SingUp.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const SingUpForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Yor full name", 'name', [requiredField], Input)}
            {createField("Email", 'email', [requiredField], Input)}
            {createField("Password", 'pass', [requiredField], Input)}
            <div>
                <button>SingUp</button>
            </div>
        </form>
    );
};

const SingUpReduxForm = reduxForm({
    form: 'sing-up'
})(SingUpForm)

const SingUp = ({singUp, isAuth}) => {
    const onSubmit = (formData) => {
        singUp({
            name: formData.name,
            email: formData.email,
            password: formData.pass,
        });
    }
    if (isAuth) return <Redirect to={"/profile/"}/>
    return (
        <div className={s.main}>
            <h1>Sing Up</h1>
            <SingUpReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default SingUp;