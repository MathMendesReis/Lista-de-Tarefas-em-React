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
padding: 0 1rem;
margin-top: -3.9rem;
flex-wrap: wrap;
>input{
  height: 3.375rem;
  min-width: 9.375rem;
  width: 34.375rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
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
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  letter-spacing: 1px;
  transition: background-color ease 1s;
  &:hover:not(:disabled){
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &:active:not(:disabled){
    transform: translateY(2px);
  }
}

>button:disabled{
  opacity: 0.8;
  cursor: not-allowed;
}
`;
