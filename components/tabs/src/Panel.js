
let panelCounter = 0;

export class AwcPanel extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'tabpanel');

    if (!this.id) {
      this.id = `awc-panel-generated-${panelCounter += 1}`;
    }
  }
}
