import React, {useEffect,useState} from 'react';
import app from './firebase';
import { getAuth,onAuthStateChanged } from "firebase/auth";

const auth=getAuth();
export const AuthContext = React.createContext();

export const AuthProvider = ({children})=>{
	const [currentUser,setCurrentUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(()=>{
		onAuthStateChanged(auth,(user)=>{
			setCurrentUser(user)
			setPending(false)
			console.log(user)
		});
	}, []);

	if(pending){
		return <>Loading...</>
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};