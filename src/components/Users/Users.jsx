import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/defaultUserMan.png';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return <div>
        <div className={s.pageList}>
            { pages.map(p => {
                return <div key={p} className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>
                        {p}
                    </div>
            })}
        </div>
        {
            props.users.map(u => <div key={u._id} className={s.userWrapper}>
                <div className={s.PhotoAndButton}>
                    <div>
                        <NavLink to={'/profile/' + u._id}>
                            <img src={u.photo != null ? u.photo : userPhoto} alt="=(" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    { u.followed
                        ? <button onClick={() => {
                            userAPI.unfollow(props.auth, u._id)
                                .then(r => {
                                    if (r.status === 200){
                                        props.unfollow(u._id)
                                    }
                                });
                            }}>Unfollow</button>
                        : <button onClick={() => {
                            userAPI.follow(props.auth, u._id)
                                .then(r => {
                                    if (r.status === 200){
                                        props.follow(u._id)
                                    }
                                });
                        }}>Follow</button>
                    }
                </div>
                <div className={s.UserInfo}>
                    <div className={s.UserName}>{u.name}</div>
                    <div className={s.UserStatus}>{u.status}</div>
                    <div className={s.UserCity}>
                        {"u.location.city"},
                    </div>
                    <div className={s.UserCountry}>
                        {"u.location.country"}
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;