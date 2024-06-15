'use client'
import styled from "styled-components";

export const Header = styled.header`
background-color: ${props => props.theme.colors.gray330};
min-height: 173px;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 768px) {
min-height: 200px;

 }
`