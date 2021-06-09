import {connect} from "react-redux";
import React from 'react';
import {
    follow, requestUser,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from './Users.jsx';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";
import {getAuth} from "../../redux/auth-selectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        let {getUser, currentPage, pageSize, auth} = this.props;
        getUser(currentPage, pageSize, auth);
    }

    onPageChanged = (pageNumber) => {
        let {getUser, pageSize, auth} = this.props;
        getUser(pageNumber, pageSize, auth);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        auth: getAuth(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            toggleFollowingProgress,
            getUser: requestUser
        })
)(UsersContainer);