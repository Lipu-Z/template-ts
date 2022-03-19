export class ClockModel {
  private _second: number;
  private _minute: number;
  private _hour: number;
  private _milsecond: number;
  private _timezone: number;



  /* mode flag
  1: hour increasing
  2: minute increasing
  0: disabled
  */
  private _mode: number;
  // display in AM/PM
  private _isFormatTwelveHour: boolean;

  constructor() {
    this._mode = 0;
    this._isFormatTwelveHour = false;
  }
  public get timezone(): number {
    return this._timezone;
  }
  public set timezone(value: number) {
    this._timezone = value;
 }
  public get isFormatTwelveHour(): boolean {
    return this._isFormatTwelveHour;
  }
  public set isFormatTwelveHour(value: boolean) {
    this._isFormatTwelveHour = value;
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
  public set mode(value: number) {
    this._mode = value;
  }
  public get milsecond(): number {
    return this._milsecond;
  }
  public set milsecond(value: number) {
    this._milsecond = value;
  }
  public get hourString() :string{
    let tempHour = this._hour;
    if(this._isFormatTwelveHour && tempHour>12){
        tempHour = tempHour - 12;
    }
    return this.convertToTwoDigit(tempHour);
  }
  public get minuteString() :string{
      return this.convertToTwoDigit(this._minute);
  }
  public get secondString() :string{
      return this.convertToTwoDigit(this._second) + this.ampm;
  }
  public get ampm(): string {
    if(this._isFormatTwelveHour) {
        return this._hour > 12 ? 'PM' : 'AM';
    }
    return '';
  }
  changeTimeZone(value: number) {
    if(this._timezone == undefined) {
      this._timezone = value;
      return;
    }
    let jetlag = this._timezone - value;
    this.increaseHour(jetlag);
    this._timezone = value;
  }
  changeMode() {
    if(this._mode == 2) {
      this._mode = 0;
      return;
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
      default: 
        return;
    }
  }
  increaseHour(count? : number) {
    if(count == undefined) {
        count = 1;
    }
    if(this._hour + count > 23) {
        this._hour = this._hour + count - 24;
        return;
    } 
    if(this._hour + count < 0) {
        this._hour = 24 + this._hour + count;
        return;
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
  changeFormat() {
    this._isFormatTwelveHour = !this._isFormatTwelveHour;
  }
  private convertToTwoDigit(digit: number) :string {
    return ('0' + digit).slice(-2);
}
}
