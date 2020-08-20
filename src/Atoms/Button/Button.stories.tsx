import React, { ButtonHTMLAttributes } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './index';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<HTMLButtonElement>> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
    children: 'Button'
};