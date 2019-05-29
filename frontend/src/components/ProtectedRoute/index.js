import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { checkAccess } from '../../services/auth'

const ProtectedRoute = ({ component: Component, rule, ...rest }) => {
	return (
		<Route
		{...rest}
		render={props =>
				checkAccess(rule) ? (
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

export default ProtectedRoute