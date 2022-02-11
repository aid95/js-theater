import { Money } from "../src/vo";
import { TicketOffice } from "../src/ticket-office";
import { Theater } from "../src/theater";
import { Ticket } from "../src/ticket";

describe("TicketOffice Test", () => {
  test("Should be defined", function () {
    const money = Money.of(1000);
    const ticketOffice = new TicketOffice(money);

    expect(ticketOffice).toBeDefined();
  });

  test("저장한 티켓의 가격을 반환한다.", () => {
    const ticketOffice = new TicketOffice(Money.of(1000));

    const fee = Money.of(1000);
    const theater = new Theater(fee);

    ticketOffice.addTicket(new Ticket(theater));

    expect(ticketOffice.getTicketPrice().equals(Money.of(1000))).toBeTruthy();
  });
});
