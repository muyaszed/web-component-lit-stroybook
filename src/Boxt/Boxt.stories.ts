import type {Meta, StoryObj} from '@storybook/web-components-vite';
import '.';
import {html} from 'lit';

const meta: Meta = {
  title: 'Components/Boxt',
  tags: ['autodocs'],
  component: 'my-boxt',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    innerText: 'This is a Boxt',
  },
};

export const BoxtCustomColor: Story = {
  args: {
    ...Default.args,
    customColor: '#1C8139',
  },
  render: (args) =>
    html`<my-boxt customColor="${args.customColor}"
      >${args.innerText}</my-boxt
    >`,
};
