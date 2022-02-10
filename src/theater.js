exports.Theater = class {
  #amount;
  #movies;

  constructor(amount) {
    this.#amount = amount;
    this.#movies = new Map();
  }

  addMovie(movie) {
    if (this.#movies.has(movie)) {
      return false;
    }
    this.#movies.set(movie, new Set());
    return true;
  }

  addScreening(movie, screening) {
    if (!this.#movies.has(movie)) {
      return false;
    }
    return this.#movies.get(movie).add(screening);
  }
};
