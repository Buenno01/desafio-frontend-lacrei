import Container from "../../assets/wrappers/Container";
import ContentContainer from "../../assets/wrappers/ContentContainer";
import Image from "./Image";
import Text from "./Text";
import imgSrc from "../../assets/images/Imagem 2I.jpg";

function index() {
  return (
    <Container>
      <ContentContainer>
        <Text></Text>
        <Image src={ imgSrc }></Image>
      </ContentContainer>
    </Container>
  );
}

export default index;
