import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  private _systemTimer = 0;
  private _systemInterval: any;
  private _systemDay = 0;
  private _userTimer = 0;
  private _userInterval: any;
  private _userMillisecond = NaN;
  private _userMillisecondModel = 100;
  private _userDay = 0;

  constructor() {
  }

  public get systemTimer(): number {
    return this._systemTimer;
  }

  public get systemDay(): number {
    return this._systemDay;
  }

  public get userTimer(): number {
    return this._userTimer;
  }

  public get userMillisecond(): number {
    return this._userMillisecond;
  }

  public get userMillisecondModel(): number {
    return this._userMillisecondModel;
  }

  public set userMillisecondModel(value: number) {
    this._userMillisecondModel = value;
  }

  public get userDay(): number {
    return this._userDay;
  }

  public systemTimerStart(ms: number) {
    if (!this.isSystemInterval())
      this._systemInterval = setInterval(() => {
        this._systemTimer += 100;
        this._systemDay = Math.floor(this._systemTimer / 864e5);
      }, ms * .1);
  }

  private userTimerStart(ms: number) {
    if (!this.isUserInterval())
      this._userInterval = setInterval(() => {
        this._userTimer += 100;
        this._userDay = Math.floor(this._userTimer / 864e5);
      }, ms * .1);
  }

  public userTimerPlay() {
    if (!this.isUserInterval()) {
      this._userMillisecond = this._userMillisecondModel;
      this.userTimerStart(this._userMillisecond);
    }
  }

  public userTimerPause() {
    if (this.isUserInterval()) {
      clearInterval(this._userInterval);
      this._userInterval = null;
    }
  }

  public userTimerStop() {
    if (this.isUserInterval() || this.userTimer !== 0) {
      clearInterval(this._userInterval);
      this._userTimer = 0;
      this._userInterval = null;
      this._userMillisecond = NaN;
      this._userDay = 0;
    }
  }

  private isSystemInterval() {
    return this._systemInterval;
  }

  public isUserInterval() {
    return this._userInterval;
  }
}
