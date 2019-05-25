import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { getDecodedToken } from '../services/token'

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				getDecodedToken().id === 1 ? (
					<Component {...props} />
				) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location }
							}}
						/>
					)
			}
		/>
	);
}

export default PrivateRoute