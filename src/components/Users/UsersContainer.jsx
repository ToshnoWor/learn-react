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
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

const getUser = (props, data) => {
    userAPI.getProfile(props.auth.userId).then(r => {
        props.toggleIsFetching(false);
        let followed = r.data[0].followers;
        data.docs.map(u =>{
            u.followed = !!followed.includes(u._id);
            return u;
        });
        props.setUsers(data.docs);
    });
}

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsersTotalCount(data.totalDocs);
            if (this.props.auth.isAuth)
                getUser(this.props, data);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsersTotalCount(data.totalDocs);
            getUser(this.props, data);
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
                    getUser={this.getUser}
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