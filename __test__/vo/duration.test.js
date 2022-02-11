import { Duration } from "../../src/vo";

describe("Duration test", () => {
  describe("생성", () => {
    test("올바른 시간을 준 경우", () => {
      const duration = Duration.ofMinutes(10);

      expect(duration.toMinutes()).toBe(10);
    });

    test("잘못된 시간을 준 경우", () => {
      expect(() => Duration.ofMinutes(-10)).toThrow();
    });
  });

  test("비교", () => {
    const d1 = Duration.ofMinutes(10);
    const d2 = Duration.ofMinutes(10);
    const d3 = Duration.ofMinutes(11);

    expect(d1.same(d2)).toBeTruthy();
    expect(d1.same(d3)).toBeFalsy();
  });
});
