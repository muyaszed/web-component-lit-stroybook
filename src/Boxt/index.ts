import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {StyledContainer} from './styles';

@customElement('my-boxt')
export class Boxt extends LitElement {
  static override styles = [StyledContainer];

  /**
   * Custom border color.
   */
  @property({type: String}) //define here
  customColor = '';

  override render() {
    return html`
      <div style="border-color: ${this.customColor}" class="boxt-container">
        <slot></slot>
      </div>
    `;
  }
}
