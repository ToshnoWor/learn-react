import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get("http://localhost:3030/profile/" +
            6)
            .then(r => {
                this.props.setUserProfile(r.data);
                console.log(r.data);
            });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);