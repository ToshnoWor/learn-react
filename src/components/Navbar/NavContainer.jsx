import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";

class NavContainer extends React.Component{
    componentDidMount() {

    }

    render() {
        return <Nav
            auth={this.props.auth}
        />
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps,{})(NavContainer);