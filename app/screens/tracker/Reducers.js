import { Map, fromJS } from "immutable";
import { START_TIME_LOG, STOP_TIME_LOG } from "./Actions";

const timeLog = (state = new Map(), action) => {
  const { type, payload } = action;
  switch (type) {
    case START_TIME_LOG:
      return fromJS({
        id: payload.id,
        startDate: payload.startDate
      });
    case STOP_TIME_LOG:
      return state.set("stopDate", payload.stopDate);
    default:
      return state;
  }
};

const timeLogs = (state = new Map(), action) => {
  const { type, payload } = action;
  switch (type) {
    case START_TIME_LOG:
      return state.set(payload.id, timeLog(undefined, action));
    case STOP_TIME_LOG:
      return state.set(payload.id, timeLog(state.get(payload.id), action));
    default:
      return state;
  }
};

const activeTimeLog = (state = null, { type, payload }) => {
  switch (type) {
    case START_TIME_LOG:
      return payload.id;
    case STOP_TIME_LOG:
      return null;
    default:
      return state;
  }
};

export { timeLogs, activeTimeLog };
