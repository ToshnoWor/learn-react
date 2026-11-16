import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {singUp} from "../../redux/auth-reducer";
import SingUp from "./SingUp";

class SingUpContainer extends React.Component{

    componentDidMount() {

    }

    render(){
        return (
            <SingUp singUp={this.props.singUp}
                   isAuth={this.props.isAuth}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(SingUpContainer);

export default connect(mapStateToProps, {
    singUp
})(WithUrlDataContainerComponent);