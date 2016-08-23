import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from '../screens/counter/Reducers';

const rootReducer = combineReducers({
  counter,
  routing
});

export default rootReducer;
