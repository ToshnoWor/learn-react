import React from "react";
import s from './FromsControls.module.css';

const FormControl = ({input, meta, children, props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {children}
                {
                    hasError && <span
                        onMouseEnter={() => {alert(meta.error)}}>!
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