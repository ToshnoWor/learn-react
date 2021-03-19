import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/default.png";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div className={s.pageList}>
            { pages.map(p => {
                return <span key={p} className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>
                        {p}
                    </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.userWrapper}>
                <div className={s.PhotoAndButton}>
                    <div>
                        <img src={u.photo != null ? u.photo : userPhoto} alt="=(" className={s.userPhoto}/>
                    </div>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
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