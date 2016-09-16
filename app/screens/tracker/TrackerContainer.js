import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tracker from "./Tracker";
import * as TrackerActions from "./Actions";
import { getActiveTimeLog } from "./Selectors";

function mapStateToProps(state) {
  return {
    activeTimeLog: getActiveTimeLog(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TrackerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
