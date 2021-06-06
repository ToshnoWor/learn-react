import {connect} from "react-redux";
import ChangeWrapper from "./ChangeWrapper";
import React from 'react';
import {saveName} from "../../../../../redux/profile-reducer";

function ChangeNameContainer(props) {
    return <ChangeWrapper state={props}>
        name
    </ChangeWrapper>
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.userId === state.profilePage.profile._id,
    value: state.profilePage.profile.name
})

export default connect(
    mapStateToProps,
    {
        saveValue: saveName
    }
)(ChangeNameContainer);