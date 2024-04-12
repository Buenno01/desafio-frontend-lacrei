import styled from 'styled-components';

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;

  & nav {
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & h3 {
    font-size: 0.9rem;
    font-weight: 700;
    color: #2D2D2D;
  }

  & li {
    list-style: none;
    color: #2D2D2D;
    font-size: 0.825rem;
    font-weight: 400;

    > a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    & nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #2D2D2D;
    }

    & li {
      list-style: none;
      color: #2D2D2D;
      font-size: 1rem;
      font-weight: 400;

      > a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 1536px) {
    width: 65%;
  }
`;

export default FooterColumn;
