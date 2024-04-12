import styled from 'styled-components';

const Button = styled.button<{ outline?: boolean }>`
  color: ${props => props.outline ? '#018762': 'white'};
  border: ${props => props.outline ? '2px solid #018762' : 'none'};
  background: ${props => props.outline ? 'none' : '#018762'};
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;

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
  }
`;

export default Button;
