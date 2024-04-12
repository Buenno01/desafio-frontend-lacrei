import styled from 'styled-components';

const HeaderRightMenuContainer = styled.div<{ isMenuOpen: boolean }>`
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    padding: 1rem;
    z-index: 20;

    & nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        display: flex;
        position: static;
        background: none;
        padding-bottom: 0;
        flex-direction: row-reverse;
        flex-grow: 1;
        padding: 0;

        & nav {
            flex-direction: row;
            justify-content: flex-end;
            flex-grow: 1;
            gap: 0;
            align-items: center;
            margin: 0;
        }
    }
`;

export default HeaderRightMenuContainer;
