import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 2.2rem;
    z-index: 10;

    @media (min-width: 1240) {
        font-size: 3rem;
        line-height: 3.6rem;
    }
`;

export default Title;
