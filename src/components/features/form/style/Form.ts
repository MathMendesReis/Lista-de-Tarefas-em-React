'use client';
import styled from "styled-components";

export const Form = styled.form`
display:flex;
align-items: center;
justify-content: center;
max-width: 736px;
width: 100%;
margin: 0 auto;
gap:8px;
padding: 0 16px;
margin-top: -25px;

>button{
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
 }

}
>button>span{
  display:none;
  @media (min-width: 768px) {
    display: inline;
 }

}
`;
