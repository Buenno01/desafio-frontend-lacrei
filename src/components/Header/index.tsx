import HeaderContainer from '../../assets/wrappers/HeaderContainer';
import logo from '../../assets/images/logo-lacrei-horizontal.svg';
import HeaderLogo from './HeaderLogo';
import BurguerMenu from './BurguerMenu';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <HeaderLogo src={ logo } />
      <BurguerMenu
        toggleMenu={ () => setIsMenuOpen(!isMenuOpen) }
        isMenuOpen={ isMenuOpen }
      />
    </HeaderContainer>
  );
}

export default Header;
