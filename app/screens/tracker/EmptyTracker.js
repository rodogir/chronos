import React, { PropTypes } from "react";

function EmptyTracker({ startTimeLog }) {
  return <button onClick={startTimeLog}>Start</button>;
}

EmptyTracker.propTypes = {
  startTimeLog: PropTypes.func.isRequired,
};

export default EmptyTracker;
