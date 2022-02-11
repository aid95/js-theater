import { DiscountPolicy } from "./discount-policy";

export class AmountDiscountPolicy extends DiscountPolicy {
  #amount;

  constructor(account) {
    super();
    this.#amount = account;
  }

  _calculateFee(fee) {
    return fee.minus(this.#amount);
  }
}
