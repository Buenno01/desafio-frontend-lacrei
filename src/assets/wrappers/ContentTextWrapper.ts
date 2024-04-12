import styled from 'styled-components';

const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  z-index: 10;
  width: 100%;
  gap:0.5rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0) 100%);

  > p {
    font-size: 1rem;
    line-height: 1rem;
  }

  @media (min-width: 640px) {
    width: 60%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0) 100%);;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
    background: none;
    width: auto;

    > p {
      line-height: 1.5rem;
      font-weight: 400;
    }
  }

  @media (min-width: 1280px) {
    > p {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }
`;

export default ContentTextWrapper;
