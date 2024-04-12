import styled from 'styled-components';

const ScrollToTopBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #018762;
  color: #018762;
  font-size: 1rem;
  transition: all 0.3s;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #5A8770;
  }

  @media (min-width: 1024px) {
    right: 4.5rem;
  }

  @media (min-width: 1280px) {
    right: 6rem;
  }

  @media (min-width: 1536px) {
    right: 8rem;
  }
`;

export default ScrollToTopBtn;
