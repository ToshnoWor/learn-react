import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserPosts, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.userId;
        }
        if (userId)
        axios.get("http://127.0.0.1:3033/api/profile/" + userId)
            .then(r => {
                this.props.setUserProfile(r.data[0]);
                this.props.setUserPosts(r.data[0].posts);
            });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    setUserPosts
})(WithUrlDataContainerComponent);