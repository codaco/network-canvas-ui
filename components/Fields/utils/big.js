const decimalPlaces = n => {
  if(Math.floor(n) === n) { return 0; }

  return n.toString().split('.')[1].length;
}

const raise = (x, n) =>
  x * n.reduce((memo, m) => (memo > decimalPlaces(m) ? memo : decimalPlaces(m)), 0) * 10;

const lower = (x, n) =>
  x / (n.reduce((memo, m) => (memo > decimalPlaces(m) ? memo : decimalPlaces(m)), 0) * 10);

const add = (a, b) =>
  lower(raise(a, [a, b]) + raise(b, [a, b]), [a, b]);

const subtract = (a, b) =>
  lower(raise(a, [a, b]) - raise(b, [a, b]), [a, b]);


class Big {
  constructor(x) {
    this.x = x;
  }

  add(x) {
    this.x = add(this.x, x);
    return this.x;
  }

  subtract(x) {
    this.x = subtract(this.x, x);
    return this.x;
  }
}

const big = (x) => new Big(x);

export default big;
