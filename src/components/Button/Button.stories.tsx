import  { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react';



export default {
    title: 'Component/Button',
    component: Button,
    args:{
        children: ('Create account'),
        size : 'md'
    },

    argTypes:{
        
    }
    
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {}


