import React from 'react';
import s from './ProfileSpecimen.module.css';
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";


const ProfileSpecimen = (props) => {
	return (
		<div className={s.description}>
			<div>{props.profile_name}</div>
			<div>
				<div className={s.details}>
					<div className={s.details_title}>Age:</div>
					<div className={s.details_text}>{props.profile_age}</div>

					<div className={s.details_title}>Type:</div>
					<div className={s.details_text}>{props.profile_sex}</div>

					<div className={s.details_title}>City:</div>
					<div className={s.details_text}>{props.profile_city}</div>

					<div className={s.details_title}>Status:</div>
					<div className={s.details_text}>
						<ProfileStatusContainer/>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProfileSpecimen;