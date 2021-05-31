import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./Login";
import {auth} from "../../redux/auth-reducer";

class LoginContainer extends React.Component{

    componentDidMount() {

    }

    render(){
        return (
            <Login auth={this.props.auth}
                   isAuth={this.props.isAuth}
                   authId={this.props.authId}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authId: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(LoginContainer);

export default connect(mapStateToProps, {
    auth
})(WithUrlDataContainerComponent);