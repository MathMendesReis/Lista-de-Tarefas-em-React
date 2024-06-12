import styled from "styled-components";

interface SButtonProps {}
const Button = styled.button<SButtonProps>`
  display: inline-flex;
  font-size: 1.4em;
  padding: 0.25em 1.6em;
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
  min-height: 5.2rem;
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
