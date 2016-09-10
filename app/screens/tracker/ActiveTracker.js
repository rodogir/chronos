import React, { Component, PropTypes } from "react";
import moment from "moment";
import { format, msToDuration } from "./Durations";

class ActiveTracker extends Component {
  componentDidMount() {
    this.updateInterval = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  getTimePassed() {
    const now = moment();
    const start = moment(this.props.startDate);
    return now.diff(start);
  }

  render() {
    const timePassed = format(msToDuration(this.getTimePassed()));
    return <div>Active Tracker: {timePassed}</div>;
  }
}

ActiveTracker.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  stopTimeLog: PropTypes.func.isRequired,
};

export default ActiveTracker;
