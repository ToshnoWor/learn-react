import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ProfileStatus from "./ProfileStatus";
import {saveStatus, updateNewStatus} from "../../../../../redux/profile-reducer";
import {auth} from "../../../../../redux/auth-reducer";

class ProfileStatusContainer extends React.Component{

    render(){
        return (
            <ProfileStatus
                status={this.props.status}
                newStatus={this.props.newStatus}
                updateNewStatus={this.props.updateNewStatus}
                saveStatus={this.props.saveStatus}
                authF={this.props.auth}
                auth={this.props.authIn}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    status: state.profilePage.profile.status,
    newStatus: state.profilePage.newStatus,
    authIn: state.auth
});

export default compose(
    connect(mapStateToProps, {
        updateNewStatus,
        saveStatus,
        auth
    })
)(ProfileStatusContainer);

