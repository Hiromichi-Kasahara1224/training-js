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
    super(atk); // Warrior_cのコンストラクタを呼び出す
    this.mgc = mgc;
  }

  attack() {
    return super.attack() + this.mgc;
  }
}

/* ----------------prototypeを使用----------------- */
// 戦士クラス
export function Warrior_p(atk) {
  this.atk = atk;
}

Warrior_p.prototype.attack = function() {
  return this.atk * 2;
};

// 魔法戦士クラス
export function MagicWarrior_p(atk, mgc) {
  Warrior_p.call(this, atk); // Warrior_pのコンストラクタを呼び出す
  this.mgc = mgc;
}

// プロトタイプ継承
MagicWarrior_p.prototype = Object.create(Warrior_p.prototype);
MagicWarrior_p.prototype.constructor = MagicWarrior_p;

// attackメソッドのオーバーライド
MagicWarrior_p.prototype.attack = function() {
  return Warrior_p.prototype.attack.call(this) + this.mgc;
};

