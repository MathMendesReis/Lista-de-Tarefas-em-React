import type { Meta, StoryObj } from '@storybook/react'
import * as S from './Input'
interface Icon extends React.SVGProps<SVGSVGElement> { }

export default {
title: 'Ui/input',
  argTypes: {
    
  },
  parameters: {
      layout: 'centered',
  }
 
} as Meta<Icon>

export const Defeault: StoryObj = {
    decorators: [
        () => {
            return (
            <S.PrimaryInput placeholder='exemplo'/>
        )}
    ]
}