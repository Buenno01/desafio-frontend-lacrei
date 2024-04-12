import FooterLogo from './FooterLogo';
import logo from '../../../assets/images/logo-lacrei-saude-grande.svg';
import SocialMediaList from './SocialMediaList';
import email from '../../../assets/images/email.svg';
import facebook from '../../../assets/images/facebook.svg';
import instagram from '../../../assets/images/instagram.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import SocialMediaIcon from './SocialMediaIcon';
import FooterLeftSideContainer from './FooterLeftSideContainer';

const socialMediaLinks = [
  {
    src: email,
    alt: 'Email',
    href: '#',
  },
  {
    src: facebook,
    alt: 'Facebook',
    href: '#',
  },
  {
    src: instagram,
    alt: 'Instagram',
    href: '#',
  },
  {
    src: linkedin,
    alt: 'Linkedin',
    href: '#',
  },
];

function FooterLeftSide() {
  return (
    <FooterLeftSideContainer>
      <FooterLogo src={ logo } />
      <SocialMediaList>
        {
          socialMediaLinks.map((link) => (
            <SocialMediaIcon key={ link.alt } src={ link.src } alt={ link.alt } />
          ))
        }
      </SocialMediaList>
    </FooterLeftSideContainer>
  );
}

export default FooterLeftSide;