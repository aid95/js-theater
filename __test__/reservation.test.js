const { Reservation } = require("../src/reservation");
const { Screening } = require("../src/screening");
const { Duration } = require("../src/vo/duration");
const { Money } = require("../src/vo/money");
const { AmountDiscountPolicy } = require("../src/policies/amount-distcount");
const { Movie } = require("../src/movie");
const { Theater } = require("../src/theater");

describe("Reservation Test", () => {
  test("생성", () => {
    const title = "spiderman";
    const runningTime = new Duration(10, 10);
    const fee = Money.of(100);
    const screening = new Screening(100, 1, new Date());
    const policy = new AmountDiscountPolicy(Money.of(49));
    const movie = new Movie(title, runningTime, fee, policy);
    const theater = new Theater(Money.of(10000));

    const reservation = new Reservation(theater, movie, screening, 0);

    expect(reservation).toBeDefined();
    expect(reservation.theater).toBe(theater);
    expect(reservation.screening).toBe(screening);
    expect(reservation.movie).toBe(movie);
    expect(reservation.count).toBe(0);
  });

  test("", () => {
    const title = "spiderman";
    const runningTime = new Duration(10, 10);
    const fee = Money.of(100);
    const screening = new Screening(100, 1, new Date());
    const policy = new AmountDiscountPolicy(Money.of(49));
    const movie = new Movie(title, runningTime, fee, policy);
    const theater = new Theater(Money.of(10000));

    const reservation = new Reservation(theater, movie, screening, 0);

    expect(() => {
      reservation.count = 0;
    }).toThrow();
  });

  test("NONE", () => {
    expect(Reservation.NONE).toBeDefined();
    expect(() => {
      Reservation.NONE = null;
    }).toThrow();
  });
});
