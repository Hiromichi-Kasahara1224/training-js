// 目覚まし時計の状態
export const State = Object.freeze({
  NORMAL: Symbol("normal"), // 通常
  ALARM_SET: Symbol("alarmSet"), // アラームセット中
  ALARM_SOUNDING: Symbol("alarmSounding"), // アラーム鳴動中
  SNOOZING: Symbol("snoozing"), // スヌーズ中
});

// イベント時に発生するアクション
export const Action = Object.freeze({
  NONE: Symbol("none"), // 何もしない
  SOUND_ALARM: Symbol("soundAlarm"), // アラームを鳴らす
  STOP_ALARM: Symbol("stopAlarm"), // アラームを止める
});

// 関数型プログラミングで改良
// アラーム設定イベント
export function setAlarm(state) {
  switch (state) {
    case State.NORMAL:
      return { nextState: State.ALARM_SET, action: Action.NONE };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// アラーム解除イベント
export function cancelAlarm(state) {
  switch (state) {
    case State.ALARM_SET:
      return { nextState: State.NORMAL, action: Action.NONE };
    case State.ALARM_SOUNDING:
      return { nextState: State.NORMAL, action: Action.STOP_ALARM };
    case State.SNOOZING:
      return { nextState: State.NORMAL, action: Action.NONE };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// アラーム設定時刻到達イベント
export function reachedToAlarmTime(state) {
  switch (state) {
    case State.ALARM_SET:
      return { nextState: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// スヌーズイベント
export function snooze(state) {
  switch (state) {
    case State.ALARM_SOUNDING:
      return { nextState: State.SNOOZING, action: Action.STOP_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// スヌーズ設定時間経過イベント
export function elapseSnoozeTime(state) {
  switch (state) {
    case State.SNOOZING:
      return { nextState: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}
