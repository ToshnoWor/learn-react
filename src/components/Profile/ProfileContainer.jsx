import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const routeUserId = this.props.match.params.userId;
        const userId = routeUserId || this.props.authId;

        if (!userId) {
            this.props.history.push('/login');
            return;
        }

        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        getProfile
    }),
    withRouter
)(ProfileContainer);
