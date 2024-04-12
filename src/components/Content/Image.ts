import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  opacity: 0.6;

  @media (min-width: 1024px) {
    opacity: 1;
    position: static;
    width: 400px;
    border-radius: 8px;
  }
`;

export default Image;
