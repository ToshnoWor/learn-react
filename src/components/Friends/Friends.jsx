import React from 'react';
import s from './Friends.module.css';
import defaultPhoto from '../../assets/images/defaultUserMan.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    axios.delete("http://localhost:3033/api/profile/unfollow/"+p._id,
                        {
                            withCredentials: true,
                            headers: {
                                'auth-token': props.auth ? props.auth.accessToken : ''
                            }
                        }
                    )
                        .then(r => {
                            console.log(r);
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