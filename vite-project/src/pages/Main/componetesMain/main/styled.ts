import styled from 'styled-components';

export const Container = styled.section`
margin-top: 2rem;
width: clamp(16rem, 50.75rem, 80rem);
padding: 0.855rem 1.5rem;
display: flex;
align-items: flex-start;
justify-content: center;
>div{
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
}
`;
