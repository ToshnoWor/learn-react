import MyPosts from "./MyPosts";
import {addPost, removePost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        auth: state.auth,
        isAuth: state.auth.userId === (state.profilePage.profile && state.profilePage.profile._id)
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    removePost
})(MyPosts);

export default MyPostsContainer;