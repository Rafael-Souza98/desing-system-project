import {CheckBox, CheckBoxProps} from './CHeckBox';
import { Meta, StoryObj } from '@storybook/react';
import {Text} from '../Text/Text'


export default {
    title: 'Component/CheckBox',
    component: CheckBox,
    args:{},
    argTypes:{},
    decorators:[
        (Story) =>{
            return(
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'> Lembrar de im por 30 dias</Text>
                </div>
            )
        }
    ]

} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {}


