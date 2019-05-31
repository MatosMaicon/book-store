import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, rule, auth, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				auth ? (
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

const mapStateToProps = store => ({
	auth: store.auth
});

export default connect(mapStateToProps)(ProtectedRoute);