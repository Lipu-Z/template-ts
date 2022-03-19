export class ClockView {
    private _app: HTMLElement;

    // time display elements
    private _second: HTMLElement;
    private _minute: HTMLElement;
    private _hour: HTMLElement;

    // function buttons
    private _modeButton: HTMLButtonElement;
    private _increaseButton: HTMLButtonElement;
    private _lightButton: HTMLButtonElement;


    constructor() {
        this._second = this.createElement('div', {id:'second'});
        this._minute = this.createElement('div', {id:'minute'});
        this._hour = this.createElement('div', {id:'hour'});

        this._modeButton = this.createElement('button', {id:'mode', text:'mode'}) as HTMLButtonElement;
        this._increaseButton = this.createElement('button', {id:'increase', text:'increase'}) as HTMLButtonElement;
        this._lightButton = this.createElement('button', {id:'light', text:'light'}) as HTMLButtonElement;

        let body = this.getElement('body');
        this._app = this.createElement('div', {id: 'clock'});
        this._app.append(this._hour,  this._minute, this._second,this._modeButton,this._increaseButton);
        if(body) {
            body.append(this._app);      
        }
    }

    getElement(selector: string): HTMLElement | null {
        return document.querySelector(selector);
    }
    createElement(tag: string, params?: any) {
        const element = document.createElement(tag);
        if(params) {
          if(params.className) {
            element.classList.add(params.className);
          }
          if(params.text) {
            element.textContent = params.text;
          } 
        }
        return element;
    }
    updateTime(hour: string, minute:string, second: string) {
        this._hour.textContent = hour;
        this._minute.textContent = minute;
        this._second.textContent = second;
    }

    bindModeButton(handler: Function) {
        this._modeButton.addEventListener('click', ev => {
          handler();
        })
    }
    bindIncreaseButton(handler: Function) {
        this._increaseButton.addEventListener('click', ev => {
          handler();
        })
    }
} 