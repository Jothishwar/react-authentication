import React,{useContext} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import {AuthContext} from './Auth';

const PrivateRoute = ({component:RouteComponent,...rest}) => {
	const {currentUser} = useContext(AuthContext);
	console.log(currentUser)
	return (
		<Routes>
		<Route
			{...rest}
			render={routeProps =>
				currentUser != null ? (
					<RouteComponent {...routeProps} />
				) : (
					<Navigate to='/login' replace />
				)
			}
		/>
		</Routes>
	);
};

export default PrivateRoute;