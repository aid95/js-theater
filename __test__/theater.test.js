import { Duration, Money } from "../src/vo";
import { AmountDiscountPolicy } from "../src/policies/amount-distcount";
import { Theater } from "../src/theater";
import { Screening } from "../src/screening";
import { Movie } from "../src/movie";
import { TicketOffice } from "../src/ticket-office";

const makeSut = function () {
  const title = "spiderman";
  const runningTime = new Duration(10, 10);
  const fee = Money.of(100);
  const policy = new AmountDiscountPolicy(Money.of(49));

  const amount = Money.of(1000);

  return {
    theater: new Theater(amount),
    movie: new Movie(title, runningTime, fee, policy),
  };
};

describe("Theater Test", () => {
  test("should be defined", () => {
    const amount = Money.of(1000);
    const theater = new Theater(amount);

    expect(theater).toBeDefined();
  });

  test("영화 추가", () => {
    const { theater, movie } = makeSut();

    expect(theater.addMovie(movie)).toBeTruthy();
    expect(theater.addMovie(movie)).toBeFalsy();
  });

  test("상영정보 추가", () => {
    const screening = new Screening(100, 1, new Date());

    const { theater, movie } = makeSut();

    expect(theater.addScreening(movie, screening)).toBeFalsy();
    expect(theater.addMovie(movie)).toBeTruthy();
    expect(theater.addScreening(movie, screening)).toBeTruthy();
  });

  test("계약된 오피스에 티켓을 발급한다.", () => {
    const ticketOffice = new TicketOffice(Money.of(1000));
    const { theater } = makeSut();

    theater.setTicketOffice(ticketOffice);

    expect(theater.setTicket(ticketOffice, 5)).toBeTruthy();
  });

  test("계약하지 않은 오피스에 티켓을 발급하지 못한다.", () => {
    const ticketOffice = new TicketOffice(Money.of(1000));
    const { theater } = makeSut();

    expect(theater.setTicket(ticketOffice, 5)).toBeFalsy();
  });

  test("티켓의 가격을 가져온다.", () => {
    const fee = 1000;

    const theater = new Theater(Money.of(fee));

    expect(theater.getFee().equals(Money.of(fee))).toBeTruthy();
  });
});
