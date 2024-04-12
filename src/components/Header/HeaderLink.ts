import styled from 'styled-components';

const HeaderLink = styled.a`
    color: #018762;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid transparent;

    @media (min-width: 640px) {
      width: auto;
    }
`;

export default HeaderLink;
