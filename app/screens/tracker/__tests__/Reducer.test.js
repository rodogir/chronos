/* eslint no-unused-expressions: 0 */
import { default as chai, expect } from "chai";
import chaiImmutable from "chai-immutable";
import { Map, fromJS } from "immutable";
import { timeLogs, activeTimeLog } from "../Reducers";
import { START_TIME_LOG, STOP_TIME_LOG } from "../Actions";

chai.use(chaiImmutable);

describe("reducers", () => {
  describe("timeLogs", () => {
    it("should handle initial state", () => {
      expect(timeLogs(undefined, {})).to.equal(new Map());
    });

    it("should handle unknown action type", () => {
      expect(timeLogs(new Map(), { type: "unknown" })).to.equal(new Map());
    });

    it("should handle START_TIME_LOG", () => {
      const id = "ID";
      const startDate = "0000";
      const action = {
        type: START_TIME_LOG,
        payload: { id, startDate }
      };
      const res = timeLogs(undefined, action);

      expect(res).to.have.deep.property([id, "id"], id);
      expect(res).to.have.deep.property([id, "startDate"], startDate);
    });

    it("should handle STOP_TIME_LOG", () => {
      const id = "ID";
      const stopDate = "9999";
      const action = {
        type: STOP_TIME_LOG,
        payload: { id, stopDate }
      };
      const state = fromJS({
        [id]: { id, startDate: "0000" }
      });
      const res = timeLogs(state, action);
      expect(res).to.have.deep.property([id, "stopDate"], stopDate);
    });
  });

  describe("activeTimeLog", () => {
    it("should handle initial state", () => {
      expect(activeTimeLog(undefined, {})).to.equal(null);
    });
    it("should handle unknown action type", () => {
      expect(activeTimeLog("2", { type: "unknown" })).to.equal("2");
    });

    it("should handle START_TIME_LOG", () => {
      const id = "ID";
      const startDate = "0000";
      const action = {
        type: START_TIME_LOG,
        payload: { id, startDate }
      };
      const res = activeTimeLog(null, action);

      expect(res).to.equal(id);
    });

    it("should handle STOP_TIME_LOG", () => {
      const id = "ID";
      const stopDate = "9999";
      const action = {
        type: STOP_TIME_LOG,
        payload: { id, stopDate }
      };
      const res = activeTimeLog(id, action);
      expect(res).to.be.null;
    });
  });
});
