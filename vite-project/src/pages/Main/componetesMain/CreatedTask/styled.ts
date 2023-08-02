import styled from 'styled-components';

export const Container = styled.form`

display: flex;
width: 100%;
align-items: center;
justify-content: center;
padding: 1rem;
align-items: center;
gap: 0.5rem;
flex: 1 0 0;
height: 3.375rem;
position: absolute;
top: 17.5%;
/* flex-wrap: wrap; */
padding: 0 1rem;
>input{
  height: 3.375rem;
  width: clamp(16rem, 39.75rem, 39.75rem);
  border-radius: 0.5rem;
  background-color: ${({theme})=>theme.colors.gray700};
  border: 0.1rem solid ${({theme})=>theme.colors.black};
  color: ${({theme})=>theme.colors.white};
  padding: 1rem;
  outline: none;

}
>button{
  height: 3.375rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme})=>theme.colors.darkBlue};
  border-radius: 0.5rem;
  border: none;
  color: ${({theme})=>theme.colors.white};
  font-weight: 900;
  letter-spacing: 1px;
  transition: background-color ease 1s;
  &:hover{
    background-color: ${({theme})=>theme.colors.blue};
  }
  &:active{
    transform: translateY(2px);
  }
}
`;
