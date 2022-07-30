export enum TimerState {
  PAUSED,
  STARTED,
  STOPPED,
}

export class Timer {
  timerState: TimerState;
  millisecondsLeft: number;
  timeout: NodeJS.Timer | undefined;
  isCompleted: boolean;

  constructor(
    timerState: TimerState = TimerState.STOPPED,
    millisecondsLeft: number = 36000,
    isCompleted: boolean = false
  ) {
    this.timerState = timerState;
    this.millisecondsLeft = millisecondsLeft;
    this.isCompleted = isCompleted;
  }

  pause() {
    this.timerState = TimerState.PAUSED;
    clearInterval(this.timeout);
  }

  start() {
    this.timerState = TimerState.STARTED;

    this.timeout = setTimeout(() => {
      if (this.millisecondsLeft - 1000 <= 0) {
        this.timerState = TimerState.STOPPED;
        this.millisecondsLeft = 0;
        this.isCompleted = true;
        clearInterval(this.timeout);
      } else {
        this.millisecondsLeft -= 1000;
      }
    }, 1000);
  }

  stop(timerDuration: number = 36000) {
    this.timerState = TimerState.STOPPED;
    this.millisecondsLeft = timerDuration;
    clearInterval(this.timeout);
  }
}
