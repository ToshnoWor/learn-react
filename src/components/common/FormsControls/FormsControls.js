import React from "react";
import s from './FromsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children, props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {children}
                {
                    hasError && <span
                        onMouseEnter={() => {
                            alert(error)
                        }}>!
                    </span>
                }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...resProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...resProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...resProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...resProps} />
        </FormControl>
    )
}

export const createField =
    (placeholder, name, validators, component, props = {}, text = "") => (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            />{text}</div>)