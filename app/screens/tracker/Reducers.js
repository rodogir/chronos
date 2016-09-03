import {START_TIME_LOG, STOP_TIME_LOG} from "./Actions";
import {Map, List} from "immutable";

const timeLog = (state = Map(), action) => {
  switch (action.type) {
    case START_TIME_LOG:
      return state.push(Immutable.Map({
        id: action.id,
        startDate: action.startDate
      }));
    case STOP_TIME_LOG:
      return state.set("stopDate", action.stopDate);
    default:
      return state;
  }
};

const timeLogs = (state = Map(), action) => {
  switch (action.type) {
    case START_TIME_LOG:
      return state.set(action.payload.id, timeLog(undefined, action));
    case STOP_TIME_LOG:
      return state.set(action.payload.id, timeLog(state.get(action.payload.id, action)));
    default:
      return state;
  }
};

const activeTimeLog = (state, action) => {
  switch (action.type) {
    case START_TIME_LOG:
      return action.id;
    case STOP_TIME_LOG:
      return undefined;
    default:
      return state;
  }
};

export {timeLogs, activeTimeLog};
