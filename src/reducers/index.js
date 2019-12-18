import {combineReducers} from 'redux';
import app from './app.reducer';
import user from './user.reducer';
import login from './login.reducer';
import signup from './signup.reducer';
export default combineReducers({app,user,login,signup});
