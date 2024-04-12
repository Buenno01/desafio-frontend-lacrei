import styled from 'styled-components';

const MenuWrapper = styled.div<{ isMenuOpen: boolean }>`
    display: ${props => props.isMenuOpen ? 'flex' : 'none'};
    position: relative;
`;

export default MenuWrapper;
