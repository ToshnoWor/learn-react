import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authId;
        }
        if (userId !== null || userId !== 'undefined')
            this.props.getProfile(userId);
    }

    render(){
        return (
            <Profile
                profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        getProfile
    }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

