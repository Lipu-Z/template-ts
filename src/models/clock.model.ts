export class ClockModel {
  private _second: number;
  private _minute: number;
  private _hour: number;

  constructor() {
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
}
