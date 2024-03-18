import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 2rem;
transition-delay: 1s, 250ms;
transition-property: margin-right, color;
>section{
  margin-top: 4rem;
  width: clamp(16rem, 48.75rem, 80rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  >span{
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    strong{
      color: ${({ theme }) => theme.colors.white};
      font-family: Inter;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-radius: 62.4375rem;
      padding: 0.5rem 1rem;
      background-color:${({ theme }) => theme.colors.gray600} ;
    }

  }
  >span:last-child{
    color: ${({ theme }) => theme.colors.purple};

  }
}

@media (max-width: 740px) {
  section{
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
}
`;
