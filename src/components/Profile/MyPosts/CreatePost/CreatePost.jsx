import React from 'react';
import s from './CreatePost.module.css'

const CreatePost = () => {
	return (
		<div className={s.Create_post}>
			<textarea placeholder='Your new post' />
			<button>Send</button>
		</div>
	)
}

export default CreatePost;