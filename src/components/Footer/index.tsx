import FooterInformationsWrapper from '../../assets/wrappers/FooterInformationsWrapper';
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
      <FooterInformationsWrapper>
        <p>
          A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site www.cvv.org.br
        </p>
        <br />
        <p>
          Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
        </p>
      </FooterInformationsWrapper>
    </Container>
  )
}

export default Footer