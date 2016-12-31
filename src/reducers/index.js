import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses //this shorthand prop name effects how "this.state.courses" reads in container components
});

export default rootReducer;

