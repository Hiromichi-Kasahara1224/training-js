// real: 実部, imag: 虚部

function add(c1, c2) {
  return {
    real: c1.real + c2.real,
    imag: c1.imag + c2.imag,
  };
}

function sub(c1, c2) {
  return {
    real: c1.real - c2.real,
    imag: c1.imag - c2.imag,
  };
}

function mul(c1, c2) {
  return {
    real: c1.real * c2.real - c1.imag * c2.imag,
    imag: c1.real * c2.imag + c1.imag * c2.real,
  };
}

function div(c1, c2) {
  const denom = c2.real ** 2 + c2.imag ** 2;
  return {
    real: (c1.real * c2.real + c1.imag * c2.imag) / denom,
    imag: (c1.imag * c2.real - c1.real * c2.imag) / denom,
  };
}

export { add, sub, mul, div };
