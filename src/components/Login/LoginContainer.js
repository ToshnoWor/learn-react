import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component{

    componentDidMount() {

    }

    render(){
        return (
            <Login  />
        )
    }
}

let mapStateToProps = (state) => ({

});

let WithUrlDataContainerComponent = withRouter(LoginContainer);

export default connect(mapStateToProps, {

})(WithUrlDataContainerComponent);