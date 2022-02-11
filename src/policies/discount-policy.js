export class DiscountPolicy {
  #conditions;

  constructor() {
    this.#conditions = new Set();
  }

  addCondition(condition) {
    this.#conditions.add(condition);
  }

  calculateFee(screening, count, fee) {
    for (const cond of this.#conditions) {
      if (cond.isSatisfiedBy(screening)) {
        return this._calculateFee(fee);
      }
    }
    return fee;
  }

  _calculateFee(fee) {
    throw new Error("you have to build your own calculateFee");
  }
}
