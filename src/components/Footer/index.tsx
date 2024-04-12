import Container from '../../assets/wrappers/Container';
import FooterContainer from '../../assets/wrappers/FooterContainer';
import FooterLeftSide from './FooterLeftSide';
import FooterRightSide from './FooterRightSide';

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <FooterLeftSide />
        <FooterRightSide />
      </FooterContainer>
    </Container>
  )
}

export default Footer