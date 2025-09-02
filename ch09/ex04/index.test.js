import {
  Warrior_c,
  MagicWarrior_c,
  Warrior_p,
  MagicWarrior_p
} from "./index.js";

/* ------------------classを使用したパターンのテスト------------------ */
describe('Warrior_c', () => {
  test('attack()は攻撃力の2倍を返す', () => {
    const w = new Warrior_c(10);
    expect(w.attack()).toBe(20);
  });
});

describe('MagicWarrior_c', () => {
  test('attack()は攻撃力の2倍+mgcを返す', () => {
    const mw = new MagicWarrior_c(10, 5);
    expect(mw.attack()).toBe(25);
  });

  test('MagicWarriorが Warrior を正しく継承しているか', () => {
    const mw = new MagicWarrior_c(10, 5);
    expect(mw instanceof Warrior_c).toBe(true);
  });
});

/* ------------------prototypeを使用したパターンのテスト------------------ */

describe('Warrior_p', () => {
  test('attack()は攻撃力の2倍を返す', () => {
    const w = new Warrior_p(10);
    expect(w.attack()).toBe(20);
  });
});

describe('MagicWarrior_p', () => {
  test('attack()は攻撃力の2倍+mgcを返す', () => {
    const mw = new MagicWarrior_p(10, 5);
    expect(mw.attack()).toBe(25);
  });

  test('MagicWarriorが Warrior を正しく継承しているか', () => {
    const mw = new MagicWarrior_p(10, 5);
    expect(mw instanceof Warrior_p).toBe(true);
  });
});
