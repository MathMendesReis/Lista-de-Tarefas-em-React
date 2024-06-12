import styled from "styled-components";

const BaseText = styled.p`
  font-family: ${props => props.theme.fontFamily.Inter};
  font-size: ${props => props.theme.fontSize.base};
  color:${props => props.theme.colors.gray600};
  line-height: 140%;
  font-weight: 400;
`;


export const Subtitle = styled(BaseText)`
  font-size: ${props => props.theme.fontSize.md};
  line-height: 120%;
  font-weight: 600;
`
export const Paragraph = styled(BaseText)`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 400;
`
export const Small = styled(BaseText)`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 400;
`