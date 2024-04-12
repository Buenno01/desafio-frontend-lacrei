import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: justify-center;
  align-items: center;

  @media (min-width: 640px) {
    justify-content: space-between;
    height: 5rem;
    padding: 0 1rem;
  }
`;

export default HeaderWrapper;
