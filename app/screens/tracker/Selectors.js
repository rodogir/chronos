import { createSelector } from "reselect";
import { Map } from "immutable";

const getActiveTimeLogId = state => state.activeTimeLog;
const getTimeLogs = state => state.timeLogs || new Map();

const getActiveTimeLog = createSelector(
  [getTimeLogs, getActiveTimeLogId],
  (timeLogs, activeTimeLogId) => timeLogs.get(activeTimeLogId)
);

const getRecentTimeLogs = state => state.timelogs;

export {
  getActiveTimeLog,
  getRecentTimeLogs,
};
