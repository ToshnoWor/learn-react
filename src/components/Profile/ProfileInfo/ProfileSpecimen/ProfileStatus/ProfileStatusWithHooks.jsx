import React, {useState, useEffect} from 'react';
import s from '../ProfileSpecimen.module.css';


const ProfileStatusWithHooks  = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.saveStatus(props.auth ,status);
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        < >
            {!editMode &&
                <div
                    onDoubleClick={
                        props.isAuth
                            ? activateMode//this.activateEditMode
                            : () => {alert("It's not your page!")}
                    }>
                        <span className={s.span}>
                            {
                                !status
                                    ? "Not status"
                                    :status
                            }
                        </span>
                </div>
            }
            {editMode &&
            <div>
                <input className={s.inputStatus}
                       autoFocus
                       //onBlur={this.deactivateEditMode.bind(this)}=
                       onChange={onStatusChange}
                       value={status}
                />
                <button className={s.button}
                        onClick={deactivateMode}
                >Save</button>
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;