export function PositiveNumber(x) {
  if (x <= 0) {
    throw new Error("require : x > 0");
  }

  let value = x;

  return {
    getX() {
      return value;
    },
    setX(newX) {
      if (newX <= 0) {
        throw new Error("require : x > 0");
      }
      value = newX;
    }
  };
}

