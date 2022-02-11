export class Ticket {
  #theater;
  #isEntered;

  constructor(theater) {
    this.#theater = theater;
    this.#isEntered = false;
  }

  getFee() {
    return this.#theater.getFee();
  }

  use(theater) {
    if (this.#isValid(theater)) {
      this.#isEntered = true;
      return true;
    }
    return false;
  }

  #isValid(theater) {
    return !(this.#isEntered || this.#theater !== theater);
  }
}
