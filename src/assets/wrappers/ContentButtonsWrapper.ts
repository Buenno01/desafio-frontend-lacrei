import styled from 'styled-components';

const ContentButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  z-index: 10;

  > button {
    font-size: 0.8rem;
    width: 300px;
  }
`;

export default ContentButtonsWrapper;
