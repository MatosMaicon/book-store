import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signOut } from '../../../services/auth';
import * as ActionsUser from '../../../store/actions/user';

const Logout = ({ ownProps, removeCurrentUser }) => {
  useEffect(() => {
    const loggedOut = signOut();
    if (loggedOut) {
      removeCurrentUser();
    }
  }, [removeCurrentUser]);

  return (
    <Redirect to="/"/>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ownProps
})

const mapDispatchToProps = dispatch => ({
  removeCurrentUser: () => dispatch(ActionsUser.removeCurrentUser()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
