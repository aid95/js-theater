const { Screening } = require("../../src/screening");
const { SequenceCondition } = require("../../src/conditions/sequence");

describe("Condition Test", () => {
  it("SequenceCondition", () => {
    const now = new Date();
    const screening = new Screening(100, 1, now);

    const sequenceCond = new SequenceCondition(1);
    const result = sequenceCond.isSatisfiedBy(screening, 1);

    expect(result).toBeTruthy();
  });
});
