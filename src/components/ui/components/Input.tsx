'use client'
import styled from "styled-components";


const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
  width: 100%;
  color: ${props => props.theme.colors.gray500};
  box-sizing: border-box;
  min-height: 52px;
  min-width: 80px;

  &:focus {
    border-color: ${props => props.theme.colors.purpleBase};
    caret-color: ${props => props.theme.colors.purpleBase};
    font-weight: 400;
    line-height: 140%;
  }
`;

export const PrimaryInput = styled(Input)``