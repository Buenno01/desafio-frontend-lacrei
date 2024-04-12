import styled from 'styled-components';

const HeaderLinkWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 0.2rem;

    @media (min-width: 640px) {
        flex-direction: row;
        gap: 1rem;
        margin: 0;
    }
`;

export default HeaderLinkWrapper;
