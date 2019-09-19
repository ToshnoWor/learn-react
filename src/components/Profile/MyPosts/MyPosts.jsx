import React from 'react';
import s from './MyPosts.module.css'
import MyPost from './Post/MyPost';
import CreatePost from './CreatePost/CreatePost';

const MyPosts = () => {
  return (
    <div className={s.my_posts}>
      My posts
      <CreatePost />
      <div className={s.posts}>
        <MyPost message='Hi, how are you?' />
        <MyPost message="It's my first post" />
      </div>
    </div>
  )
}

export default MyPosts;