import React,{useContext} from 'react';
import {Routes,Route,useNavigate} from 'react-router-dom';
import {AuthContext} from './Auth';

const PrivateRoute = ({component:RouteComponent,...rest}) => {
	const {currentUser} = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(currentUser)
	return (
		<Routes>
		<Route
			{...rest}
			render={routeProps =>
				!!currentUser ? (
					<RouteComponent {...routeProps} />
				) : (
					navigate('/login',{replace:true})
				)
			}
		/>
		</Routes>
	);
};

export default PrivateRoute;