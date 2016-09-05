import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import counter from "../screens/counter/Reducers";
import { timelogs, activeTimeLog } from "../screens/tracker/Reducers";

const rootReducer = combineReducers({
  counter,
  timelogs,
  activeTimeLog,
  routing,
});

export default rootReducer;
