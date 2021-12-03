import { LightningElement, api } from 'lwc';

export default class Augmentor extends LightningElement {

    startCounter = 0;

    handleStartChange(event) {
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter() {
        const link = this.template.querySelector('c-numerator');

        if (link) {
            link.maximizeCounter();
        }
    }

    testOne() {
        const link = this.template.querySelector('c-numerator');

        if (link) {
            link.maximizeCounter();
        }
    }

    testTwo() {
        const link = this.template.querySelector('c-numerator');

        if (link) {
            link.maximizeCounter();
        }
    }
}