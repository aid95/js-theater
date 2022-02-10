const { Duration } = require("../src/vo/duration");
const { Money } = require("../src/vo/money");
const { AmountDiscountPolicy } = require("../src/policies/amount-distcount");
const { Movie } = require("../src/movie");
const { Screening } = require("../src/screening");
const { SequenceCondition } = require("../src/conditions/sequence");

describe("Movie test", () => {
  test("영화 생성", () => {
    const title = "spiderman";
    const runningTime = new Duration(10, 10);
    const fee = Money.of(100);
    const screening = new Screening(100, 1, new Date());
    const policy = new AmountDiscountPolicy(Money.of(49));
    const movie = new Movie(title, runningTime, fee, policy);

    expect(movie).not.toBeUndefined();
  });

  test("가격 계산", () => {
    const title = "spiderman";
    const runningTime = new Duration(10, 10);
    const fee = Money.of(100);
    const screening = new Screening(100, 1, new Date());
    const policy = new AmountDiscountPolicy(Money.of(49));
    const movie = new Movie(title, runningTime, fee, policy);

    policy.addCondition(new SequenceCondition(1));
    const movieFee = movie.calculateFee(screening, 1);

    expect(movieFee.equals(Money.of(51))).toBeTruthy();
  });
});
