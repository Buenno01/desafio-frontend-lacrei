import HeaderContainer from '../../assets/wrappers/HeaderContainer';
import logo from '../../assets/images/logo-lacrei-horizontal.svg';
import HeaderLogo from './HeaderLogo';
import BurguerMenu from './BurguerMenu';
import { useState } from 'react';
import HeaderRightMenu from './HeaderRightMenu';
import Container from '../../assets/wrappers/Container';
import HeaderWrapper from '../../assets/wrappers/HeaderWrapper';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <HeaderLogo src={ logo } />
          <BurguerMenu
            toggleMenu={ () => setIsMenuOpen(!isMenuOpen) }
            isMenuOpen={ isMenuOpen }
            />
          <HeaderRightMenu isMenuOpen={ isMenuOpen }></HeaderRightMenu>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
