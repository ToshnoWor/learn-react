import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.auth({
            email: "alekseikoval69@gmail.com",
            password: "22446688al"
        });
    }
    render() {
        return <Header {...this.props} />}
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    accessToken: state.auth.accessToken
});

export default connect(mapStateToProps,{auth})(HeaderContainer);