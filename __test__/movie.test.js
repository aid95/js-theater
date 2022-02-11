import { Duration, Money } from "../src/vo";
import { Screening } from "../src/screening";
import { AmountDiscountPolicy } from "../src/policies/amount-distcount";
import { Movie } from "../src/movie";
import { SequenceCondition } from "../src/conditions/sequence";

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
