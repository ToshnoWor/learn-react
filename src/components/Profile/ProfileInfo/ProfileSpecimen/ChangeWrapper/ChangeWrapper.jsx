import React, {useState, useEffect} from 'react';
import s from '../ProfileSpecimen.module.css';

const ChangeWrapper = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [value, setValue] = useState(props.state.value);

    const activateMode = () => {
        setEditMode(true);
    }

    useEffect(() => {
        setValue(props.state.value);
    }, [props.state.value]);

    const deactivateMode = () => {
        setEditMode(false);
        props.state.saveValue(props.state.auth, value);
    }

    const onValueChange = (e) => {
        setValue(e.target.value);
    }
    return <>
        {
            !editMode
                ? <div onDoubleClick={
                    props.state.isAuth
                        ? activateMode
                        : () => {alert("It's not your page!")}
                }>
                    <span className={s.spanStatus}>
                        {
                            !value
                                ? 'Not ' + props.children
                                : value
                        }
                    </span>
                </div>
                :<div>
                    <input className={s.inputStatus}
                           autoFocus
                           onChange={onValueChange}
                           value={value}
                    />
                    <button className={s.button}
                            onClick={deactivateMode}>Save</button>
                </div>
        }
    </>
}

export default ChangeWrapper;