import { useState } from 'react';
import HeaderContainer from '../../assets/wrappers/HeaderContainer';
import logo from '../../assets/images/logo-lacrei-horizontal.svg';
import HeaderLogo from './HeaderLogo';
import BurguerMenu from './BurguerMenu';
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
          <HeaderRightMenu isMenuOpen={ isMenuOpen } />
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
