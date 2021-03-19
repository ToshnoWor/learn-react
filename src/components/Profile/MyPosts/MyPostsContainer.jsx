import MyPosts from "./MyPosts";
import {createPost, updateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    createPost,
    updateNewPostText
})(MyPosts);

export default MyPostsContainer;