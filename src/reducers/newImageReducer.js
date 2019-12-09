import constants from './../constants';
const { initialState, types } = constants;

const newImageReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.REQUEST_IMAGE:
    return state; //change this
  case types.RECEIVE_IMAGE:    
    return action.image;
  default:
    return state;
  }
};

export default newImageReducer;