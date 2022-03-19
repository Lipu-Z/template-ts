export class ClockView {
    private _second: HTMLElement;
    private _minute: HTMLElement;
    private _hour: HTMLElement;
    constructor() {
        
    }

    getElement(selector: string): HTMLElement | null {
        return document.querySelector(selector);
    }
    createElement(tag: string) {
        const element = document.createElement(tag);
        return element;
    }
} 