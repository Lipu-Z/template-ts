export class ClockModel {
  private _second: number;
  private _minute: number;
  private _hour: number;


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
  changeMode() {
    if(this._mode == 2) {
      this._mode = 0;
    }
    this._mode++;
  }
}
