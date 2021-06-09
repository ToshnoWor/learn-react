import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/defaultUserMan.png';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, auth, unfollow, follow}) => {
    return <div key={user._id} className={s.userWrapper}>
        <div className={s.PhotoAndButton}>
            <div>
                <NavLink to={'/profile/' + user._id}>
                    <img
                        src={user.photo != null ? user.photo : userPhoto}
                        alt="=("
                        className={s.userPhoto}
                    />
                </NavLink>
            </div>
            {
                auth.isAuth
                    ? user.followed
                    ? <button disabled={followingInProgress.some(id => id === user._id)}
                              onClick={() => {
                                  unfollow(user._id, auth);
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user._id)}
                              onClick={() => {
                                  follow(user._id, auth);
                              }}>
                        Follow</button>
                    : <></>
            }
        </div>
        <div className={s.UserInfo}>
            <div className={s.UserName}>{user.name}</div>
            <div className={s.UserStatus}>{user.status}</div>
            <div className={s.UserCity}>
                {"user.location.city"},
            </div>
            <div className={s.UserCountry}>
                {"user.location.country"}
            </div>
        </div>
    </div>
}

export default User;