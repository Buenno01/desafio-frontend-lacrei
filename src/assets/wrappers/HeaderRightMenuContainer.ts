import styled from 'styled-components';

const HeaderRightMenuContainer = styled.div<{ isMenuOpen: boolean }>`
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    padding-bottom: 1rem;

    @media (min-width: 640px) {
        display: flex;
        position: static;
        background: none;
        padding-bottom: 0;
        flex-direction: row-reverse;
        flex-grow: 1;
    }
`;

export default HeaderRightMenuContainer;
