import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
    }
    render() {
        return <Header {...this.props} />}
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    accessToken: state.auth.accessToken
});

export default connect(mapStateToProps,{logout})(HeaderContainer);