import {connect} from "react-redux";
import React from 'react';
import {
    follow, getUser,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize, this.props.auth);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUser(pageNumber, this.props.pageSize, this.props.auth);
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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
        auth: state.auth,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            toggleFollowingProgress,
            getUser
        })
)(UsersContainer);