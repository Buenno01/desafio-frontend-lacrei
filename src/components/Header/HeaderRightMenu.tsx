import HeaderLinkWrapper from '../../assets/wrappers/HeaderLinkWrapper';
import HeaderRightMenuContainer from '../../assets/wrappers/HeaderRightMenuContainer';
import Button from '../Button';
import HeaderLink from './HeaderLink';

type HeaderRightMenuProps = {
  isMenuOpen: boolean;
};

const links = [
  { name: 'Quem somos', url: '#' },
  { name: 'Ajuda', url: '#' },
];

function HeaderRightMenu({ isMenuOpen }: HeaderRightMenuProps) {
  return (
    <HeaderRightMenuContainer isMenuOpen={ isMenuOpen }>
      <HeaderLinkWrapper>
        {
          links.map((link) => (
            <HeaderLink key={ link.name } href={ link.url }>
              { link.name }
            </HeaderLink>
          ))
        }
        <Button>Entrar</Button>
      </HeaderLinkWrapper>
    </HeaderRightMenuContainer>
  );
}

export default HeaderRightMenu;
