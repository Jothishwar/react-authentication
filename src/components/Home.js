import React from 'react'
import {auth} from '../firebase';

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<button onClick={()=> auth.signOut()} >Sign out</button>
		</div>
	)
}

export default Home