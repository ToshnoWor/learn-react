import {connect} from "react-redux";
import React from 'react';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from 'axios';
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("http://localhost:3033/api/profile/get?" +
            "_page=" + this.props.currentPage +
            "&_limit=" + this.props.pageSize,
            {withCredentials: true})
            .then(r => {
                this.props.setUsersTotalCount(r.data.totalDocs);
                if (this.props.auth.isAuth)
                axios.get("http://127.0.0.1:3033/api/profile/" + this.props.auth.userId)
                    .then(r2 => {
                        let followed = r2.data[0].followers;
                        r.data.docs.map(u =>{
                            u.followed = !!followed.includes(u._id);
                            return u;
                        })

                        this.props.setUsers(r.data.docs);
                        this.props.toggleIsFetching(false);
                    });
            });

    }

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get("http://localhost:3033/api/profile/get?" +
                "_page=" + pageNumber +
                "&_limit=" + this.props.pageSize,
                {withCredentials: true})
            .then(r => {
                this.props.setUsersTotalCount(r.data.totalDocs);
                axios.get("http://127.0.0.1:3033/api/profile/" + this.props.auth.userId)
                    .then(r2 => {
                        let followed = r2.data[0].followers;
                        r.data.docs.map(u =>{
                            u.followed = !!followed.includes(u._id);
                            return u;
                        })
                        this.props.setUsers(r.data.docs);
                        this.props.toggleIsFetching(false);
                    });
            });

    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    auth={this.props.auth}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        auth: state.auth
    }
}

export default connect(mapStateToProps,
    {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersContainer);