import { Condition } from "./condition";

export class SequenceCondition extends Condition {
  #sequence;

  constructor(sequence) {
    super();
    this.#sequence = sequence;
  }

  isSatisfiedBy(screening, audienceCount) {
    return screening.sequence === this.#sequence;
  }
}
