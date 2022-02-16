import { Ticket } from "./ticket";

export class Theater {
  #fee;
  #movies;
  #ticketOffices;

  constructor(fee) {
    this.#fee = fee;
    this.#movies = new Map();
    this.#ticketOffices = new Set();
  }

  setTicketOffice(ticketOffice) {
    this.#ticketOffices.add(ticketOffice);
  }

  setTicket(ticketOffice, num) {
    if (!this.#ticketOffices.has(ticketOffice)) {
      return false;
    }
    while (num-- > 0) {
      ticketOffice.addTicket(new Ticket(this));
    }
    return true;
  }

  addMovie(movie) {
    if (this.#movies.has(movie)) {
      return false;
    }
    this.#movies.set(movie, new Set());
    return true;
  }

  addScreening(movie, screening) {
    if (!this.#movies.has(movie)) {
      return false;
    }
    return this.#movies.get(movie).add(screening);
  }

  getFee() {
    return this.#fee;
  }
}
