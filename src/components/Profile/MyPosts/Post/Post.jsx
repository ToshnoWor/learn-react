import React from 'react';
import s from './Post.module.css'

class Post extends React.Component{
    deletePost = (e) =>{
        this.props.removePost(this.props.auth, e.target.value);
    }
    render() {
        return <div className={s.item}>
            <div> </div>
            <div>{this.props.message}</div>
            {this.props.auth.isAuth
                ? <button value={this.props.postId}
                          onClick={this.deletePost}>X</button>
                : <></>
            }
        </div>
    }
}

export default Post;