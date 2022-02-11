export class Movie {
  #title;
  #runningTime;
  #fee;
  #policy;

  constructor(title, runningTime, fee, policy) {
    this.#title = title;
    this.#runningTime = runningTime;
    this.#fee = fee;
    this.#policy = policy;
  }

  calculateFee(screening, count) {
    return this.#policy.calculateFee(screening, count, this.#fee);
  }
}
