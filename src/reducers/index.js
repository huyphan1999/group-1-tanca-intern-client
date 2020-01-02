import {combineReducers} from 'redux';
import app from './app.reducer';
import user from './user.reducer';
import login from './login.reducer';
import signup from './signup.reducer';
import company from './company.reducer';
import shift from './shift.reducer';
import emp from './emp.reducer';
export default combineReducers({app,user,login,signup,company,shift,emp});
