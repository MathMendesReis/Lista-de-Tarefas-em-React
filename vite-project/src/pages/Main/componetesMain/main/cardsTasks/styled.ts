import styled from 'styled-components';


interface Prosp {
  isConcluid: boolean;
}
export const Container = styled.section<Prosp>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({theme})=>theme.colors.gray600};
  border-radius: 0.5rem;
  height: 6rem;
  width: 100%;
  >p{
    text-align: center;
    text-decoration: ${({isConcluid }) =>
    isConcluid ? 'line-through': 'none'};
  }
  >button{
    background-color: transparent;
    border: none;
    svg{
      color: ${({theme})=>theme.colors.gray500};
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
      opacity: 0.7;
      transition: opacity ease-out 5ms ;
      &:hover{
      opacity: 1.5;
      }
    }
  }

  form{
    input[type="checkbox"]{
      height: 2rem;
      width: 1.2rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
