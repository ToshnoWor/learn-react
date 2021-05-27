import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        if (this.props.isAuth){
        let userId = this.props.match.params.userId;
        /*if (!userId){
            userId = this.props.userId;
        }*/
        if (userId)
            this.props.getProfile(userId);}
    }

    render(){
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
    //userId: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
})(WithUrlDataContainerComponent);