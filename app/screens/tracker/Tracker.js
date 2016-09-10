import React, { PropTypes } from "react";
import ActiveTracker from "./ActiveTracker";
import EmptyTracker from "./EmptyTracker";

function Tracker({ activeTimeLog, startTimeLog }) {
  if (activeTimeLog) {
    return (
      <ActiveTracker
        startDate={activeTimeLog.get("startDate")}
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
};

export default Tracker;
