import React from 'react';
import s from './users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/default.png"

class Users extends React.Component{

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users/1079")
            .then(r => {
                this.props.setUsers(r.data.items);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id} className={s.userWrapper}>
                    <div className={s.PhotoAndButton}>
                        <div>
                            <img src={u.photo != null ? u.photo : userPhoto} alt="=(" className={s.userPhoto}/>
                        </div>
                        { u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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
}

export default Users;