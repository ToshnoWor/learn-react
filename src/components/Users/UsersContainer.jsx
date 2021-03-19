import {connect} from "react-redux";
import React from 'react';
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users.jsx";

class UsersContainer extends React.Component{
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
        return <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);