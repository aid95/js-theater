import { Theater } from "../src/theater";
import { Money } from "../src/vo";
import { Ticket } from "../src/ticket";

describe("Ticket Test", () => {
  test("극장으로부터 티켓이 발행된다.", function () {
    const theater = new Theater(Money.of(10000));
    const ticket = new Ticket(theater);

    expect(ticket).toBeDefined();
  });

  test("티켓은 극장으로부터 가격을 가져온다.", () => {
    const theater = new Theater(Money.of(10000));
    const ticket = new Ticket(theater);

    expect(ticket.getFee().equals(Money.of(10000))).toBeTruthy();
  });

  describe("티켓 사용", () => {
    test("티켓을 사용한다.", () => {
      const theater = new Theater(Money.of(10000));
      const ticket = new Ticket(theater);

      expect(ticket.use(theater)).toBeTruthy();
    });

    test("티켓은 일회용이다.", () => {
      const theater = new Theater(Money.of(10000));
      const ticket = new Ticket(theater);

      ticket.use(theater);

      expect(ticket.use(theater)).toBeFalsy();
    });

    test("티켓은 발행한 극장에서만 사용될 수 있다.", () => {
      const theater = new Theater(Money.of(10000));
      const otherTheater = new Theater(Money.of(10000));
      const ticket = new Ticket(theater);

      expect(ticket.use(otherTheater)).toBeFalsy();
    });
  });
});
