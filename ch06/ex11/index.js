export const polarPoint = {
    r: 0, // 半径の初期化
    theta: 0, // 角度(ラジアン)の初期化

    get x() {
      return this.r * Math.cos(this.theta);
    },

    get y() {
      return this.r * Math.sin(this.theta);
    },

    set x(value) {
      if (Number.isNaN(value)) {
        throw new Error('Invalid value for x: NaN is not allowed.');
      }
      const y = this.y;  //get y()を呼び出してyを取得
      this.r = Math.sqrt(value * value + y * y); // rを更新
      this.theta = Math.atan2(y, value);  // thetaを更新
    },

    set y(value) {
      if (Number.isNaN(value)) {
        throw new Error('Invalid value for y: NaN is not allowed.');
      }
      const x = this.x;  //get x()を呼び出してxを取得
      this.r = Math.sqrt(x * x + value * value);　// rを更新
      this.theta = Math.atan2(value, x);　// thetaを更新
    }
  };