export class C {
  #count = 0; // プライベート変数

  get x() {
    return this.#count++;
  }
}
