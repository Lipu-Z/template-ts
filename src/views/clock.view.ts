import { ClockController } from "../controllers/ClockController";

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
    private _resetButton: HTMLButtonElement;
    private _formatButton: HTMLButtonElement;
    private _timeZoneSelect: HTMLSelectElement;

    constructor() {
        this._second = this.createElement('div', {className : 'boxDigit',id:'second'});
        this._minute = this.createElement('div', {className : 'boxDigit',id:'minute'});
        this._hour = this.createElement('div', {className : 'boxDigit',id:'hour'});

        this._modeButton = this.createElement('button', {id:'mode', text:'mode'}) as HTMLButtonElement;
        this._increaseButton = this.createElement('button', {id:'increase', text:'increase'}) as HTMLButtonElement;
        this._lightButton = this.createElement('button', {id:'light', text:'light'}) as HTMLButtonElement;
        this._resetButton = this.createElement('button', {id:'reset', text:'reset'}) as HTMLButtonElement;
        this._formatButton = this.createElement('button', {id:'mode', text:'format'}) as HTMLButtonElement;
        this._timeZoneSelect = this.createSelect({options: ClockController.TIMEZONE_MAP});

        let secol1 = this.createElement('div', {className : 'boxSemiCol', text:':'});
        let secol2 = this.createElement('div',{className : 'boxSemiCol', text:':'});
        let body = this.getElement('body');
        this._app = this.createElement('div', {className : 'boxClock',id: 'clock'});
        this._app.append(this._hour,  secol1, this._minute, secol2, this._second);
        let _buttonGrp = this.createElement('div', {className : 'boxClock',id: 'funtions'});
        _buttonGrp.append(this._modeButton,this._increaseButton,this._lightButton,this._resetButton,this._formatButton,this._timeZoneSelect);
        this._lightButton.addEventListener('click', ev=> {
            this.setLight();
        })
        if(body) {
            body.append(this._app);
            body.append(_buttonGrp);            
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
    private createSelect(params:any) : HTMLSelectElement{
        let elm = this.createElement('select');
        if(params.options) {
          for(let option of params.options ) {
            let newOption= this.createElement('option', {text: option.text, id: option.id}) as HTMLSelectElement;
            if(option.value != undefined) {
              newOption.value = option.value;
            }
            elm.append(newOption);
          }
        }
        return elm as HTMLSelectElement;
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
    bindResetButton(handler: Function) {
        this._resetButton.addEventListener('click',ev =>{
          handler();
        })
    }
    bindFormatButton(handler: Function) {
        this._formatButton.addEventListener('click',ev =>{
          handler();
        })
    }
    bindTimeZoneSelect(handler: Function) {
        this._timeZoneSelect.addEventListener('change', ev => {
          handler((ev.target as HTMLSelectElement).value);
        })
    }
    setLight(on? :boolean) {
        if(on != undefined) {
            if(on) {
                this._app.setAttribute('style', 'background-color:blue');
                return;
            } else {
                this._app.removeAttribute('style');
                return;  
            }
        }
        if(!this._app.hasAttribute('style')) {
          this._app.setAttribute('style', 'background-color:blue');
        } else {
          this._app.removeAttribute('style');
        }
    }

    setToBlink(propertyName: string) {
        if(propertyName == 'hour') {
            this._hour.className = 'boxDigit blink';
            this._minute.className = 'boxDigit';
            return;
        }
        if(propertyName == 'minute') {
            this._minute.className = 'boxDigit blink';
            this._hour.className = 'boxDigit';
            return;
        }
        this._minute.className = 'boxDigit';
        this._hour.className = 'boxDigit';
    }
    setTimezone(timeZone: number) {
        this._timeZoneSelect.value = timeZone.toString();
    }
} 