export class ClockModel {
  private _second: number;
  private _minute: number;
  private _hour: number;
  private _milsecond: number;

  /* mode flag
  1: hour increasing
  2: minute increasing
  0: disabled
  */
  private _mode: number;
  constructor() {
    this._mode = 0;
  }
  public get second(): number {
    return this._second;
  }
  public set second(value: number) {
    this._second = value;
  }
  public get minute(): number {
    return this._minute;
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public get hour(): number {
    return this._hour;
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public get mode() : number {
    return this._mode;
  }
  public get milsecond(): number {
    return this._milsecond;
  }
  public set milsecond(value: number) {
    this._milsecond = value;
  }
  changeMode() {
    if(this._mode == 2) {
      this._mode = 0;
    }
    this._mode++;
  }
  increase() {
    switch(this._mode) {
      case 1:
        this.increaseHour();
        break;
      case 2:
        this.increaseMinute();
        break;
    }
  }
  increaseHour(count? : number) {
    if(count == undefined) {
        count = 1;
    }
    if(this._hour + count > 23) {
        this._hour = this._hour + count - 23;
    } 
    if(this._hour + count < 0) {
        this._hour = 24 + this._hour + count;
    }
    else {
        this._hour += count;
    }
  }

  increaseMinute() {
      if(this._minute == 59) {
          this._minute = 0;
          this.increaseHour();
      } else {
          this._minute++;
      }
  }
  add() {
    this._milsecond += 100;
    if (this._milsecond >= 1000) {
        this._second++;
        this._milsecond = 0;
    }
    if (this._second >= 60) {
        this._minute++;
        this._second = 0;
    }
    if (this._minute >= 60) {
        this._hour++;
        this._minute = 0;
    }
  }
}
