import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  gap: 3rem;
  margin-top: 1rem;

  border-top: 1px solid #B2DFD0;
  border-bottom: 1px solid #B2DFD0;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }

  @media screen and (min-width: 1536px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 0;
  }
`;

export default FooterContainer;
