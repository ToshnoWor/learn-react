import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ProfileStatus from "./ProfileStatus";
import {saveStatus} from "../../../../../redux/profile-reducer";

class ProfileStatusContainer extends React.Component{

    render(){
        return (
            <ProfileStatus
                status={this.props.status}
                saveStatus={this.props.saveStatus}
                isAuth={this.props.isAuth}
                auth={this.props.auth}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.profilePage.profile.status,
    isAuth: state.profilePage.profile._id ===state.auth.userId,
    auth: state.auth
});

export default compose(
    connect(mapStateToProps, {
        saveStatus
    })
)(ProfileStatusContainer);

