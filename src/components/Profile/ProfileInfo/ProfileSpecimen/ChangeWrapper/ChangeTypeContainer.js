import {connect} from "react-redux";
import ChangeWrapper from "./ChangeWrapper";
import React from 'react';
import {saveType} from "../../../../../redux/profile-reducer";

function ChangeTypeContainer(props) {
    return <ChangeWrapper state={props}>
        type
    </ChangeWrapper>
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.userId === state.profilePage.profile._id,
    value: state.profilePage.profile.type
})

export default connect(
    mapStateToProps,
    {
        saveValue: saveType
    }
)(ChangeTypeContainer);