import MyPosts from "./MyPosts";
import {createPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        isAuth: state.auth.userId === (state.profilePage.profile && state.profilePage.profile._id)
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    createPost
})(MyPosts);

export default MyPostsContainer;