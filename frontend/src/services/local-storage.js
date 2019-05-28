export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('@bookStore:state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('@bookStore:state', serializedState);
  } catch (error) {
    console.log(error);
  }
}