import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;

  img{
    width: 1.375rem;
    height: 2.25rem;
  }

  span{
    font-size: ${({theme})=> theme.fontSize['4xl']};
    font-family: inter;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    background-image: linear-gradient(to right, ${({theme})=>theme.colors.blue} 43%, ${({theme})=>theme.colors.purple} 48%);
    -webkit-background-clip: text;
    color: transparent;
  }


`;
