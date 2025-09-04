/* ------------------classを使用------------------ */
// 戦士クラス
export class Warrior_c {
  constructor(atk) {
    this.atk = atk;
  }

  attack() {
    return this.atk * 2;
  }
}

// 魔法戦士クラス
export class MagicWarrior_c extends Warrior_c {
  constructor(atk, mgc) {
    super(atk); // 親クラスのコンストラクタを呼び出す
    this.mgc = mgc;
  }

  attack() {
    return super.attack() + this.mgc; // 親クラスのattackメソッドを呼び出す
  }
}

/* ----------------prototypeを使用----------------- */
// 戦士クラス
export function Warrior_p(atk) { // コンストラクタ関数
  this.atk = atk; // atkを初期化
}

Warrior_p.prototype.attack = function() { // Warrior_pのプロトタイプにattackメソッドを追加
  return this.atk * 2;
};

// 魔法戦士クラス
export function MagicWarrior_p(atk, mgc) { // コンストラクタ関数
  Warrior_p.call(this, atk); // Warrior_pのコンストラクタを呼び出してatkを初期化
  this.mgc = mgc; // mgcを初期化
}

// プロトタイプ継承
MagicWarrior_p.prototype = Object.create(Warrior_p.prototype); // Warrior_pのプロトタイプを継承
MagicWarrior_p.prototype.constructor = MagicWarrior_p; // constructorがMagicWarrior_pを指すように修正

// attackメソッドのオーバーライド
MagicWarrior_p.prototype.attack = function() {
  return Warrior_p.prototype.attack.call(this) + this.mgc; // 親クラスのattackメソッドを呼び出し、mgcを加算
};

