import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 3rem 0;
  }
`;

export default FooterContainer;
