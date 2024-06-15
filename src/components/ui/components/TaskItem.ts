'use client'
import styled from "styled-components";


export const TaskItem = styled.li`
width: 100%;
min-height: 56px;
display: flex;
gap: 12px;
box-sizing: border-box;
align-items: flex-start;
padding: 16px;
gap: 12px;
background: #E0DCE4;
border: 1px solid #D1CBD7;
border-radius: 8px;
max-width: 736px;

p{
  width: 100%;
  padding-left: 25px;
  text-align: center;
}

label {
  flex-grow: 0.2;
  height: 24px;
  width: 24px;
  position: relative;
  svg{
    position: absolute;
    top: 50%;
  }
  input{
    appearance: none;
  }
}
`;
