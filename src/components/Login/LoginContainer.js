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
            <Login auth={this.props.auth} />
        )
    }
}

let mapStateToProps = (state) => ({

});

let WithUrlDataContainerComponent = withRouter(LoginContainer);

export default connect(mapStateToProps, {
    auth
})(WithUrlDataContainerComponent);