import {INITIALIZE_APP} from '../actionTypes/app.actiontypes';

const intialState = {
  appInitialized: false,
};

function appReducer(state = intialState, action) {
  switch (action.type) {
    case INITIALIZE_APP:
      return Object.assign(state, {
        appInitialized: true,
      });
    default:
      return state;
  }
}

export default appReducer;
