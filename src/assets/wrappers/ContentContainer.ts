import styled from 'styled-components';

const ContentContainer = styled.main`
  display: flex;
  height: 491px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1280px) {
    height: 600px;
    gap: 3rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

export default ContentContainer;
