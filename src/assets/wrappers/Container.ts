import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-height: 100%;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }

    @media (min-width: 1280px) {
      padding: 0 138px;
    }
`;

export default Container;
