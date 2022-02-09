const { Condition } = require("./condition");

exports.SequenceCondition = class extends Condition {
  #sequence;

  constructor(sequence) {
    super();
    this.#sequence = sequence;
  }

  isSatisfiedBy(screening, audienceCount) {
    return screening.sequence === this.#sequence;
  }
};
