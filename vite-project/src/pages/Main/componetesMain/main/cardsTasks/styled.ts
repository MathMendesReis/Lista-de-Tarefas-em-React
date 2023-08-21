import styled from 'styled-components';


interface Prosp {
  isConcluid: boolean;
}
export const Container = styled.section<Prosp>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({theme})=>theme.colors.gray700};
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
    height: 1.2rem;
    width: 1.2rem;
    cursor: pointer;
    appearance: none; 
    outline: none;
    -webkit-appearance: none; 
    border: 2px solid ${({theme})=>theme.colors.blue}; 
    background-color: ${({theme})=>theme.colors.black};
    border-radius: 50%;

    &:checked {
      background-color: ${({theme})=>theme.colors.purple};
      border: 2px solid ${({theme})=>theme.colors.purple}; 
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cstyle%3E.polyline { stroke: %23FFFFFF; stroke-width: 25 }%3C/style%3E%3Crect width='256' height='256' fill='none'/%3E%3Cpolyline class='polyline' points='40 144 96 200 224 72' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3C/svg%3E");
    }
    
    }
  }
`;
