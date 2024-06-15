'use client'
import styled from "styled-components";

const BaseText = styled.p`
  font-family: ${props => props.theme.fontFamily.Inter};
  font-size: 1.4rem;
  color:${props => props.theme.colors.gray100};
  line-height: 140%;
  font-weight: 400;
  display: inline;
`;


export const Subtitle = styled(BaseText)`
  font-size: 1.6rem;
  line-height: 120%;
  font-weight: 600;
`
export const Paragraph = styled(BaseText)`
  font-weight: 400;
  font-size: 1.4rem;
  color:${props => props.theme.colors.gray600};  
`
export const Small = styled(BaseText)`
  font-weight: 400;
`
export const BtnText = styled(BaseText)`
  font-size: 1.4rem;
  line-height: 120%;
  font-weight: 600;
`

