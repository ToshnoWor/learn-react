import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <content className={s.content}>
      <div className={s.pro_logo}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
      </div>
      <div className={s.ava_description}>
        <div><img src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png" /></div>
        <div className={s.description}>
          <div> Acc name </div>
          <div>
            <div>Acc details1</div>
            <div>Acc details2</div>
            <div>Acc details3</div>
            <div>Acc details4</div>
          </div>
        </div>
      </div>
      <MyPosts />
    </content>
  )
}

export default Profile;