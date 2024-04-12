import { IoMenuOutline, IoClose } from 'react-icons/io5';
import Button from '../Button';

type BurguerMenuProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function BurguerMenu({ toggleMenu, isMenuOpen }: BurguerMenuProps) {
  return (
    <Button
      className='burguer-menu'
      outline
      onClick={ toggleMenu }
    >
      {
        isMenuOpen ? <IoClose /> : <IoMenuOutline />
      }
    </Button>
  );
}

export default BurguerMenu;
