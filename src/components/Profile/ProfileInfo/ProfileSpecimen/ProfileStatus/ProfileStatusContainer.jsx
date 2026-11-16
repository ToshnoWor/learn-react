import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {saveStatus} from "../../../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileStatusContainer(props) {
    return (
        <ProfileStatusWithHooks
            status={props.status}
            saveStatus={props.saveStatus}
            isAuth={props.isAuth}
            auth={props.auth}
        />
    )
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

