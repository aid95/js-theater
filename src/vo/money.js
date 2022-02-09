exports.Money = class Money {
  #value;

  constructor(value) {
    if (value < 0) throw new Error("Invalid params");
    this.#value = value;
  }

  static of(value) {
    return new Money(value);
  }

  plus(o) {
    return new Money(this.#value + o.#value);
  }

  minus(o) {
    return new Money(this.#value - o.#value);
  }

  equals(o) {
    return this.#value === o.#value;
  }
};
