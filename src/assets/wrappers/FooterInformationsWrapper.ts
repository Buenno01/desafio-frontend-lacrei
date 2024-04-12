import styled from 'styled-components';

const FooterInformationsWrapper = styled.div<{ gap?: string }>`
  margin-top: 3rem;
  padding: 0 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  font-size: 0.875rem;
  color: #515151;
`;

export default FooterInformationsWrapper;
