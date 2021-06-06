import {connect} from "react-redux";
import ChangeWrapper from "./ChangeWrapper";
import React from 'react';
import {saveCity} from "../../../../../redux/profile-reducer";

function ChangeCityContainer(props) {
    return <ChangeWrapper state={props}>
        city
    </ChangeWrapper>
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.userId === state.profilePage.profile._id,
    value: state.profilePage.profile.city
})

export default connect(
    mapStateToProps,
    {
        saveValue: saveCity
    }
)(ChangeCityContainer);