import {html, fixture, expect} from '@open-wc/testing';

import {Boxt} from '.';
import '.';

describe('Component', () => {
  it('should renders child correctly', async () => {
    const child = 'This is a child';
    const el: Boxt = await fixture(html` <my-boxt>${child}</my-boxt> `);
    expect(
      el.shadowRoot?.querySelector('slot')?.assignedNodes()[0].textContent
    ).to.contain(child);
  });
});
