import React from 'react';
import s from './users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/default.png"

class Users extends React.Component{
    componentDidMount() {
        axios
            .get("http://localhost:3030/items")
            /*.get("https://social-network.samuraijs.com/api/1.0/users/1079?" +
                "page=${this.props.currentPage}&" +
                "count=${this.props.pageSize}")*/
            .then(r => {
                this.createMass(r.data, this.props.currentPage);
                // this.props.setUsers(r.data.items);
                // this.props.setTotalUsersCount(r.data.totalCount>5000
                //     ? r.data.totalCount/1000
                //     : r.data.totalCount);
            });
    }

    sumSize(num, count){
        /*alert(num + " " + count);*/
        if (count === 0) num = 0;
        else
            if (count > 1)
                for (let i = 0; i < count-1; i++){
                    num += num;
                }
        /*alert(num);*/
        return num;
    }

    createMass(input, p){
        let outMass = [];
        let inMass = [...input];
        this.props.setTotalUsersCount(inMass.length);

        let start = this.sumSize(this.props.pageSize, p-1);
        let end = this.sumSize(this.props.pageSize, p);
        if(end > this.props.totalUserCount) end = this.props.totalUserCount;
        /*alert("totalUserCount = " + this.props.totalUserCount);
        alert("Rez = " + ((end > this.props.totalUserCount) ? this.props.totalUserCount : end));*/
        for (let i = start;i < end;i++){
            outMass.push(inMass[i]);
        }
        this.props.setUsers(outMass);
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios
            .get("http://localhost:3030/items")
            /*.get("https://social-network.samuraijs.com/api/1.0/users/1079?" +
                "page=${pageNumber}&" +
                "count=${this.props.pageSize}")*/
            .then(r => {
                this.createMass(r.data, pageNumber);
                /*this.props.setUsers(r.data.items);
                this.props.setTotalUsersCount(r.data.totalCount>5000
                    ? r.data.totalCount/1000
                    : r.data.totalCount);*/
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div className={s.pageList}>
                { pages.map(p => {
                    return <span key={p} className={this.props.currentPage === p && s.selectedPage}
                    onClick={(e) => {
                        this.onPageChanged(p);
                    }}>
                        {p}
                    </span>
                })}
            </div>
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