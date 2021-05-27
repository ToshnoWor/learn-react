import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends, unfollow} from "../../redux/friends-reducer";

class FriendsContainer extends React.Component{
    componentDidMount() {
        this.props.getFriends(this.props.auth.userId);
    }
    render() {
        return <Friends
            friends={this.props.friends}
            unfollow={this.props.unfollow}
            auth={this.props.auth}
        />}
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    friends: state.friendsPage.friends
});

export default connect(mapStateToProps,{getFriends, unfollow})(FriendsContainer);