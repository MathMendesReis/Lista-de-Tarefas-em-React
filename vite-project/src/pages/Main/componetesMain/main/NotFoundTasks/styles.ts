import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
border-top: 1px solid ${({theme})=>theme.colors.gray600};
padding: 4rem 1.5rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 0.5rem;
gap: 1rem;
`;
