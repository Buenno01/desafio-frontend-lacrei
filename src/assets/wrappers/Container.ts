import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 auto;
    position: relative;
    width: 100%;

    @media (min-width: 640px) {
      margin: 0 1rem;
    }

    @media (min-width: 768px) {
      margin: 0 2rem;
    }

    @media (min-width: 1024px) {
      margin: 0 4rem;
    }

    @media (min-width: 1280px) {
      margin: 0 138px;
    }
`;

export default Container;
