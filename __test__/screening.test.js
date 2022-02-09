const { Screening } = require("../src/screening");

describe("Screening Test", () => {
  it("생성", () => {
    const screening = new Screening(100, 1, new Date());
    expect(screening).toBeDefined();
  });

  it.each([
    [100, -1],
    [-1, 1],
  ])("좌석과 상영순서는 음수를 가질 수 없다.", (seatCount, seq) => {
    expect(() => new Screening(seatCount, seq, new Date())).toThrow();
  });

  it("잔여 좌석 검사", () => {
    const screening = new Screening(100, 1, new Date());
    expect(screening.hasSeat(100)).toBeTruthy();
    expect(screening.hasSeat(101)).toBeFalsy();
  });

  it("좌석을 예약한다.", () => {
    const screening = new Screening(100, 1, new Date());

    screening.reserveSeat(100);

    expect(screening.hasSeat(1)).toBeFalsy();
  });
});
