import {connect} from "react-redux";
import ChangeWrapper from "./ChangeWrapper";
import React from 'react';
import {saveAge} from "../../../../../redux/profile-reducer";

function ChangeAgeContainer(props) {
    return <ChangeWrapper state={props}>
        age
    </ChangeWrapper>
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.userId === state.profilePage.profile._id,
    value: state.profilePage.profile.age
})

export default connect(
    mapStateToProps,
    {
        saveValue: saveAge
    }
)(ChangeAgeContainer);