export enum TimerState {
  STARTED,
  PAUSED,
  STOPPED,
}

export class Timer {
  static getMinutesAndSeconds(timeInSeconds: number): string {
    const minutes = timeInSeconds < 60 ? 0 : Math.floor(timeInSeconds / 60);
    const seconds = !minutes ? timeInSeconds : timeInSeconds - minutes * 60;

    const minutesText = minutes > 9 ? minutes : `0${minutes}`;
    const secondsText = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutesText}:${secondsText}`;
  }
}
