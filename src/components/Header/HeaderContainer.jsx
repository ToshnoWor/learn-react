import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAccessToken, setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        userAPI.auth().then(r => {
                let {id, login, email} = r.data;
                this.props.setAuthUserData(id,email,login);
                this.props.setAccessToken(r.data.token);
                this.props.toggleIsFetching(false);
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

export default connect(mapStateToProps,{toggleIsFetching,setAuthUserData, setAccessToken})(HeaderContainer);