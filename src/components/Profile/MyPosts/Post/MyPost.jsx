import React from 'react';
import s from './MyPost.module.css'

const MyPost = (props) => {
  return (
    <div className={s.item}>
      <div></div>
      <div>{props.message}</div>
    </div>
  )
}

export default MyPost;