import styled from 'styled-components';

const FooterLeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 3rem;
  }
`;

export default FooterLeftSideContainer;
