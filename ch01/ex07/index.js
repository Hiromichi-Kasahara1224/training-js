class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
  }
}
let p = new Point(1, 1);
p.distance();

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

p1.add(p2); // p1 の座標が (4, 6) になる

console.log(p1.x, p1.y); // 出力: 4 6

export { Point };
