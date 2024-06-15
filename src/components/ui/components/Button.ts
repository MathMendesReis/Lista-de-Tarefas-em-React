'use client'
import styled from "styled-components";

interface SButtonProps {
  size?:"small"
}
const Button = styled.button<SButtonProps>`
  display: inline-flex;
  font-size: 1.4em;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.purpleDark};
  color: ${props=>props.theme.colors.gray100};
  border: none;
  letter-spacing: 1px;
  transition: background-color ease 1s;
  line-height: 140%;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.mono};
  letter-spacing: 0%;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  max-width: 110px;
  width: 100%;
  height: 52px;
  padding: 24px 16px;

  gap:8px;
  opacity: 0.8;
  &:hover:not(:disabled){
    opacity: 1;
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

export const DefaultButton = styled(Button)`
`;
export const GhostButton = styled(Button)`
background-color: transparent;
width: 24px;
height: 24px;
`;
