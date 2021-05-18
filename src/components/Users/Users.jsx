import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/defaultUserMan.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            //this.props.toggleIsFetching(true);
                            axios.delete("http://localhost:3033/api/profile/unfollow/"+u._id,
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
                                        props.unfollow(u._id)
                                    }
                                    //this.props.toggleIsFetching(false);
                                });
                            }

                        }>Unfollow</button>
                        : <button onClick={() => {
                            //this.props.toggleIsFetching(true);
                            axios.post("http://localhost:3033/api/profile/follow/"+u._id,
                                {},
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
                                        props.follow(u._id)
                                    }
                                    //this.props.toggleIsFetching(false);
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