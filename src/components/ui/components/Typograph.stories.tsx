
import { Meta, StoryObj } from "@storybook/react/*";
import * as S from "./Typography";

export default {
    title: 'Ui/Typography',
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} as Meta

export const Subtitle: StoryObj = {
    decorators: [
        () => {
            return (<S.Subtitle>Adicione uma nova tarefa</S.Subtitle>)
        }
    ]
}
export const Paragraph: StoryObj = {
    decorators: [
        () => {
            return (<S.Paragraph>Adicione uma nova tarefa</S.Paragraph>)
        }
    ]
}
export const Small: StoryObj = {
    decorators: [
        () => {
            return (<S.Small>Adicione uma nova tarefa</S.Small>)
        }
    ]
}