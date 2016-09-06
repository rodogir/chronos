/* eslint no-unused-expressions: 0 */
import { expect } from "chai";
import moment from "moment";
import * as Durations from "../Durations";

describe("durations", () => {
  it("should format durations", () => {
    const durationStrings = ["00:00:05", "20:02:49"];
    durationStrings.forEach(durationString => {
      const duration = moment.duration(durationString);
      expect(Durations.format(duration)).to.equal(durationString);
    });
  });
});
