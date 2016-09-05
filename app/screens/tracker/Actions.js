import uuid from "uuid";
import moment from "moment";

export const START_TIME_LOG = "START_TIME_LOG";
export const STOP_TIME_LOG = "STOP_TIME_LOG";

export function startTimeLog() {
  return {
    type: START_TIME_LOG,
    payload: {
      id: uuid.v4(),
      startDate: moment().toISOString()
    }
  };
}

export function stopTimeLog(id) {
  return {
    type: STOP_TIME_LOG,
    payload: {
      id,
      stopDate: moment().toISOString()
    }
  };
}
