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
            this.view.updateTime(this._model.hour.toString(), this._model.minute.toString(), this._model.second.toString());
        },1000)

    }

    init() {
        let current = new Date();
        this._model.second = current.getSeconds();
        this._model.hour = current.getHours();
        this._model.minute = current.getMinutes();
    }

    onModeChanged = () => {
        console.log('test2');
        this._model.changeMode();
    }
    onIncrease = () => {
        this.model.increase();
    }
}