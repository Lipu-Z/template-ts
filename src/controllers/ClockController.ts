import { ClockModel } from "../models/clock.model";
import { ClockView } from "../views/clock.view";

export class ClockController {
    private _model: ClockModel;
    private _view: ClockView;

    constructor(model: ClockModel, view: ClockView) {
        this._model = model;
        this._view = view;
        this._view.bindModeButton(this.onModeChanged);
        this._view.bindIncreaseButton(this.onIncrease);
        this._view.bindResetButton(this.onReset);
        this._view.bindFormatButton(this.onFormatChange);
    }
    public get view(): ClockView {
        return this._view;
    }
    public set view(value: ClockView) {
        this._view = value;
    }
    public get model(): ClockModel {
        return this._model;
    }
    public set model(value: ClockModel) {
        this._model = value;
    }
    startTime() {
        this.init();
        setInterval(() => {
            this._model.add();
            this._view.updateTime(this._model.hourString, this._model.minuteString, this._model.secondString);
        },100)
    }

    init() {
        let current = new Date();
        this._model.milsecond = current.getMilliseconds();
        this._model.second = current.getSeconds();
        this._model.hour = current.getHours();
        this._model.minute = current.getMinutes();
    }

    onModeChanged = () => {
        this._model.changeMode();
    }
    onIncrease = () => {
        this.model.increase();
    }

    onReset = () => {
        this.init();
    }
    onFormatChange = () => {
        this.model.changeFormat();
    }
}