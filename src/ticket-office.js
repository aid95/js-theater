export class TicketOffice {
  #amount;
  #tickets;

  constructor(amount) {
    this.#amount = amount;
    this.#tickets = [];
  }

  addTicket(ticket) {
    this.#tickets.push(ticket);
  }

  getTicketPrice() {
    if (this.#tickets.length === 0) {
      return 0;
    }
    return this.#tickets[0].getFee();
  }
}
