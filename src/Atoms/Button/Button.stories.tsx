import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButton, ETheme } from './index';

const componentArgTypes: Meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        actions: {
            handles: ['click']
        }
    },
    argTypes: {
        theme: {
            control: {
                type: 'inline-radio',
                options: [ETheme.PRIMARY, ETheme.SECONDARY],
                expanded: true
            },
            defaultValue: ETheme.PRIMARY
        },
        disabled: {
            control: {
                type: 'boolean'
            },
            defaultValue: false
        }
    }
}

export default componentArgTypes

const Template: Story<IButton> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
    children: 'Button'
};