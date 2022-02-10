const { Money } = require("../../src/vo");

describe("Money test", () => {
  describe("생성", () => {
    it("올바른 값을 준 경우", () => {
      const fee = Money.of(10);
      expect(fee).toBeDefined();
    });

    it("잘못된 값을 준 경우", () => {
      expect(() => Money.of(-100)).toThrow();
    });
  });

  it("더하기", () => {
    const fee1 = Money.of(10);
    const fee2 = Money.of(20);

    const result = fee1.plus(fee2);

    expect(result.equals(Money.of(30))).toBeTruthy();
  });

  it("빼기", () => {
    const fee1 = Money.of(20);
    const fee2 = Money.of(10);

    const result = fee1.minus(fee2);

    expect(result.equals(Money.of(10))).toBeTruthy();
  });
});
