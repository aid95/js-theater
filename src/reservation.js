function Reservation(theater, movie, screening, count) {
  this.theater = theater;
  this.movie = movie;
  this.screening = screening;
  this.count = count;
  return Object.freeze(this);
}

Object.defineProperty(Reservation, "NONE", {
  value: new Reservation(null, null, null, 0),
  writable: false,
});

exports.Reservation = Reservation;
