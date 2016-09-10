import React, { PropTypes } from "react";
import ActiveTracker from "./ActiveTracker";
import EmptyTracker from "./EmptyTracker";

function Tracker({ activeTimeLog, startTimeLog, stopTimeLog }) {
  if (activeTimeLog) {
    return (
      <ActiveTracker
        startDate={activeTimeLog.get("startDate")}
        stopTimeLog={() => stopTimeLog(activeTimeLog.get("id"))}
        title="This is the title"
        description="Here I can write more details about what I did"
      />);
  }
  return (
    <EmptyTracker
      startTimeLog={startTimeLog}
      title="This is the title"
      description="Here I can write more details about what I did"
    />);
}

Tracker.propTypes = {
  activeTimeLog: PropTypes.object,
  startTimeLog: PropTypes.func.isRequired,
  stopTimeLog: PropTypes.func.isRequired
};

export default Tracker;
