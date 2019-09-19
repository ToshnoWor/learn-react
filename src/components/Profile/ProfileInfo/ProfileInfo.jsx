import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileSpecimen from "./ProfileSpecimen/ProfileSpecimen";


const ProfileInfo = () => {
	return (
		<div>
			<div className={s.pro_logo}>
				<img
					src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			</div>
			<div className={s.ava_description}>
				<div className={s.profile_logo}><img src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png"/></div>
				<ProfileSpecimen profile_name="Alex Smith" profile_age="19" profile_sex="Male" profile_city="Symu"
				                profile_status="online"/>
			</div>
		</div>
	)
};

export default ProfileInfo;