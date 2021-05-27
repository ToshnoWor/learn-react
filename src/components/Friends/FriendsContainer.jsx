import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends, unfollow} from "../../redux/friends-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class FriendsContainer extends React.Component{
    componentDidMount() {
        if (!this.props.auth.isAuth)
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

export default compose(
    connect(mapStateToProps,{getFriends, unfollow}),
    withAuthRedirect
)(FriendsContainer);