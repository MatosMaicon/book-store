export function addCurrentUser(user) {
  return {
    type: 'ADD_CURRENT_USER',
    user
  };
}

export function removeCurrentUser() {
  return {
    type: 'DEL_CURRENT_USER'
  };
}
