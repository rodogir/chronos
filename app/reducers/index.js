import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import counter from "../screens/counter/Reducers";
import { timeLogs, activeTimeLog } from "../screens/tracker/Reducers";

const rootReducer = combineReducers({
  counter,
  timeLogs,
  activeTimeLog,
  routing,
});

export default rootReducer;
