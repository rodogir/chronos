/* eslint no-unused-expressions: 0 */
import { expect } from "chai";
import counter from "../Reducers";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../Actions";


describe("reducers", () => {
  describe("counter", () => {
    it("should handle initial state", () => {
      expect(counter(undefined, {})).to.equal(0);
    });

    it("should handle INCREMENT_COUNTER", () => {
      expect(counter(1, { type: INCREMENT_COUNTER })).to.equal(2);
    });

    it("should handle DECREMENT_COUNTER", () => {
      expect(counter(1, { type: DECREMENT_COUNTER })).to.equal(0);
    });

    it("should handle unknown action type", () => {
      expect(counter(1, { type: "unknown" })).to.equal(1);
    });
  });
});