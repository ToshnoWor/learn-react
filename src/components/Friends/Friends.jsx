import React from 'react';
import s from './Friends.module.css';
import defaultPhoto from '../../assets/images/defaultUserMan.png';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

const Friends = (props) =>{
    let friend = null;
    if (props.friends)
    friend = props.friends.map( (p, id) => {
        return <div className={s.container} key={id}>
            <NavLink to={'/profile/' + p._id} className={s.friendFrame}>
                <div className={s.photo}><img src={p.photo? p.photo : defaultPhoto} alt='=('/></div>
                <div className={s.name}>{p.name}</div>
            </NavLink>
                <button className={s.buttonFrame} onClick={() => {
                    userAPI.unfollow(props.auth, p._id).then(r => {
                            if (r.status === 200){
                                props.unfollow(p)
                            }
                        });
                }}
                >Unfriend</button>

        </div>
    })
    return <div className={s.main}>
        {friend}
  </div>
}

export default Friends;