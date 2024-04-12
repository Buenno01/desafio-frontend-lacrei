import styled from 'styled-components';

const Button = styled.button<{ outline?: boolean }>`
  color: ${(props) => (props.outline ? '#018762' : 'white')};
  border: ${(props) => (props.outline ? '2px solid #018762' : 'none')};
  background: ${(props) => (props.outline ? 'none' : '#018762')};
  padding: 0.625rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 700;
  transition: background-color 0.3s;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.3);

  nav & {
    width: auto;
    padding: 0.5rem 1.2rem;
  }

  &:hover {
    background-color: #016d58;
  }

  &.burguer-menu {
    padding: 0.2rem;
    height: 2.6rem;
    width: 2.6rem;
    border:none;
    font-size: 2.6rem;
    position: absolute;
    right: 1rem;
    box-shadow: none;
    background: #fff;

    @media (min-width: 640px) {
      display: none;
    }
  }
`;

export default Button;
