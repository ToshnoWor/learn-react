import React from 'react';
import s from './ProfileSpecimen.module.css';
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import ChangeAgeContainer from "./ChangeWrapper/ChangeAgeContainer";
import ChangeTypeContainer from "./ChangeWrapper/ChangeTypeContainer";
import ChangeCityContainer from "./ChangeWrapper/ChangeCityContainer";
import ChangeNameContainer from "./ChangeWrapper/ChangeNameContainer";


const ProfileSpecimen = (props) => {
	return (
		<div className={s.description}>
			<div>
				<ChangeNameContainer/>
			</div>
			<div>
				<div className={s.details}>
					<div className={s.details_title}>Age:</div>
					<div className={s.details_text}>
						<ChangeAgeContainer/>
					</div>

					<div className={s.details_title}>Type:</div>
					<div className={s.details_text}>
						<ChangeTypeContainer/>
					</div>

					<div className={s.details_title}>City:</div>
					<div className={s.details_text}>
						<ChangeCityContainer/>
					</div>

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