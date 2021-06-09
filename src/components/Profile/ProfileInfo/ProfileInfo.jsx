import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileSpecimen from "./ProfileSpecimen/ProfileSpecimen";
import defaultPhotoMan from '../../../assets/images/defaultUserMan.png';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = ({profile}) => {
	if (!profile)
		return <Preloader />
	return (
		<div>
			<div className={s.ava_description}>
				<div className={s.profile_logo}><img
					src={profile.photo === null ? defaultPhotoMan : profile.photo}
					alt={"=("}/></div>
				<ProfileSpecimen profile_name={profile.name === null ? "" : profile.name}
								 profile_age={profile.age === null ? "" : profile.age}
								 profile_sex={profile.type === null ? "" : profile.type}
								 profile_city={profile.city === null ? "" : profile.city}
				/>
			</div>
		</div>
	)
};

export default ProfileInfo;