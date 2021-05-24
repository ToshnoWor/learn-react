import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriend, refreshFriends, unfollow} from "../../redux/friends-reducer";

class FriendsContainer extends React.Component{
    componentDidMount() {
        this.props.refreshFriends();
        const userId = this.props.auth.userId;
        if (userId)
        axios.get('http://127.0.0.1:3033/api/profile/' + userId)
            .then(r => {
                if (r.status === 200)
                    r.data[0].followers.map( p => {
                        axios.get('http://127.0.0.1:3033/api/profile/' + p).then(r2 =>{
                                this.props.addFriend(r2.data[0]);
                            }
                        )
                        return p;
                    })
            });
    }
    render() {
        return <Friends
            friends={this.props.friends}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            auth={this.props.auth}
        />}
}

let mapStateToProps = (state) => ({
    auth: state.auth,
    friends: state.friendsPage.friends
});

export default connect(mapStateToProps,{refreshFriends, addFriend, unfollow})(FriendsContainer);