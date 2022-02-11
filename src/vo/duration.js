export class Duration {
  #seconds;

  constructor(sec) {
    if (sec < 0) throw new Error("invalid params");
    this.#seconds = sec;
  }

  toMinutes() {
    return this.#seconds / 60;
  }

  same(other) {
    return this.#seconds === other.#seconds;
  }

  static ofMinutes(minutes) {
    return new this(minutes * 60);
  }
}
