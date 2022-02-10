const { Money } = require("../../src/vo/money");
const { AmountDiscountPolicy } = require("../../src/policies/amount-distcount");
const { SequenceCondition } = require("../../src/conditions/sequence");
const { Screening } = require("../../src/screening");

describe("Discount policies Test", () => {
  it("고정값 할인 정책", () => {
    const now = new Date();
    const screening = new Screening(500, 1, now);
    const policy = new AmountDiscountPolicy(Money.of(100));
    policy.addCondition(new SequenceCondition(1));

    const result = policy.calculateFee(screening, 2, Money.of(150));

    expect(result.equals(Money.of(50))).toBeTruthy();
  });
});
