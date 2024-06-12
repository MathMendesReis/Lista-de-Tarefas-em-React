import { PlusCircle } from "@phosphor-icons/react";
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from "@storybook/react/*";

import * as S from "./Button";

export default {
    title: 'Ui/Buttons',
    component: S.DefaultButton,
    parameters: {
        layout: 'centered',
        design: {
          type: "figma",
          url: "https://www.figma.com/design/iOB1Tewej3g5AJbvNpGGwv/Lista-de-Tarefas-(Community)?node-id=1085-814&t=e6kmbbvCJoNWucuF-0",
      },
      actions: {
      handles: ['mouseover', 'click'],
    },
  },
    decorators: [withActions],
    tags: ['autodocs'],

} as Meta<typeof S.DefaultButton>

export const Default: StoryObj = {
    decorators: [
        () => {
      return (
          <S.DefaultButton>Button</S.DefaultButton>
      );
    }
  ]
   
}
export const LabelWithIcon: StoryObj = {
    decorators: [
        () => {
      return (
        <S.DefaultButton>
          Button
          <PlusCircle size={20} />
        </S.DefaultButton>
      );
    }
  ]
   
}
export const WithIcon: StoryObj = {
    decorators: [
        () => {
      return (
        <S.DefaultButton>
          <PlusCircle size={20} />
        </S.DefaultButton>
      );
    }
  ]
   
}
export const Disabled: StoryObj = {
    decorators: [
        () => {
      return (
        <S.DefaultButton disabled>
          Button
          <PlusCircle size={20} />
        </S.DefaultButton>
      );
    }
  ]
   
}