import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					className={s.img}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"
					alt="abstraction"
				/>
			</div>
			<div className={s.descriptionBlock}></div>
		</div>
	)
}

export default ProfileInfo
