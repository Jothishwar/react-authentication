import React from 'react'
import app from '../firebase';

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<button onClick={()=> app.auth().signOut()} >Sign out</button>
		</div>
	)
}

export default Home