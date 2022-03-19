export class ClockView {
    private _app: HTMLElement;
    private _second: HTMLElement;
    private _minute: HTMLElement;
    private _hour: HTMLElement;

    constructor() {
        this._second = this.createElement('div', {id:'second'});
        this._minute = this.createElement('div', {id:'minute'});
        this._hour = this.createElement('div', {id:'hour'});
        let body = this.getElement('body');
        this._app = this.createElement('div', {id: 'clock'});
        this._app.append(this._hour,  this._minute, this._second);
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
} 