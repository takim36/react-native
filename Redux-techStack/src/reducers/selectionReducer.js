const initialState = '';

export default selectionReducer = (state = initialState, action) => {

  if(action.type == 'select_library'){
    return action.payload;
  }
  return state;
}