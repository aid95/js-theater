exports.Screening = class Screening {
  #seat;
  #sequence;
  #whenScreened;

  constructor(seat, sequence, whenScreened) {
    if (new.target !== Screening) {
      throw new Error("Subclassing is not allowed");
    }

    if (seat <= 0 || sequence <= 0) {
      throw new Error("Invalid params");
    }

    this.#seat = seat;
    this.#sequence = sequence;
    this.#whenScreened = whenScreened;
  }

  get sequence() {
    return this.#sequence;
  }

  hasSeat(count) {
    return count <= this.#seat;
  }

  reserveSeat(count) {
    if (!this.hasSeat(count)) {
      throw new Error("no seat");
    }
    this.#seat -= count;
  }
};
