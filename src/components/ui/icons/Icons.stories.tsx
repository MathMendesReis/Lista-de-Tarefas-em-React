import type { Meta, StoryObj } from '@storybook/react'
import * as I from './index'
interface Icon extends React.SVGProps<SVGSVGElement> { }

export default {
title: 'Ui/icons',
  argTypes: {
    stroke: {
      control: {
            type: 'select', 
          },
          options: ['#000000', '#FFFFFF'],
      
      description: 'Color of the stroke',
    },
  },
  parameters: {
      layout: 'centered',
  }
 
} as Meta<Icon>

export const trash: StoryObj<Icon> = {
  decorators: [
    () => {
      return (
        <I.Trash/>
      )
      }
    ]
}
export const logo: StoryObj<Icon> = {
  decorators: [
    () => {
      return (
        <I.Logo/>
      )
      }
    ]
}