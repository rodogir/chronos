import {createSelector} from "reselect";

const getActiveTimeLogId = state => state.activeTimeLog;
const getTimeLogs = state => state.timeLogs;

export const getActiveTimeLog = createSelector(
  [getTimeLogs, getActiveTimeLogId],
  (timeLogs, activeTimeLogId) => timeLogs.get(activeTimeLogId)
);
