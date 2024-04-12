import styled from 'styled-components';

const ColumnWrapper = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
`;

export default ColumnWrapper;
