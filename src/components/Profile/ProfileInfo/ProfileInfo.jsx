import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileSpecimen from "./ProfileSpecimen/ProfileSpecimen";
import defaultPhotoMan from '../../../assets/images/defaultUserMan.png';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
	if (!props.profile)
		return <Preloader />

	return (
		<div>
			<div className={s.pro_logo}>
				<img
					src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt={"=("}/>
			</div>
			<div className={s.ava_description}>
				<div className={s.profile_logo}><img
					src={props.profile.photo === null ? defaultPhotoMan : props.profile.photo}
					alt={"=("}/></div>
				<ProfileSpecimen profile_name={props.profile.name}
								 profile_age={props.profile.age}
								 profile_sex={props.profile.type}
								 profile_city={props.profile.city}
								 profile_status={props.profile.status ? "online" : "offline"}/>
			</div>
		</div>
	)
};

export default ProfileInfo;