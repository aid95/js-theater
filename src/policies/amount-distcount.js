const { DiscountPolicy } = require("./discount-policy");

exports.AmountDiscountPolicy = class extends DiscountPolicy {
  #amount;

  constructor(account) {
    super();
    this.#amount = account;
  }

  _calculateFee(fee) {
    return fee.minus(this.#amount);
  }
};
