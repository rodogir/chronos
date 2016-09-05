import { createSelector } from "reselect";

const getActiveTimeLogId = state => state.activeTimeLog;
const getTimeLogs = state => state.timeLogs;

const getActiveTimeLog = createSelector(
  [getTimeLogs, getActiveTimeLogId],
  (timeLogs, activeTimeLogId) => timeLogs.get(activeTimeLogId)
);

const getRecentTimeLogs = state => state.timelogs;

export {
  getActiveTimeLog,
  getRecentTimeLogs
};
