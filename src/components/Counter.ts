'use client'
import styled, { DefaultTheme } from "styled-components";


export const Wrapper = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
`;
interface CounterProps {
  bgcolor?: keyof DefaultTheme['colors'];
  fontcolor?: keyof DefaultTheme['colors'];
}
export const Counter = styled.div<CounterProps> `
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 999px;
width: 30px;
height: 22px;
background-color: ${props => props.bgcolor ? props.theme.colors[props.bgcolor] : props.theme.colors.purpleLigth};
padding: 8px 4px;
>p{
  color: ${props => props.fontcolor ? props.theme.colors[props.fontcolor] : props.theme.colors.purpleDark};
  font-weight: bold;
  font-size: 1.2rem;
}
`;
