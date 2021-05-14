import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAccessToken, setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.post("http://localhost:3033/api/user/login", {
            "email": "alekseikoval69@gmail.com",
            "password": "22446688al"
        })
            .then(r => {
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