import ContentButtonsWrapper from "../../assets/wrappers/ContentButtonsWrapper";
import Button from "../Button";

function Buttons() {
  return (
    <ContentButtonsWrapper>
      <Button>Buscar atendimento</Button>
      <Button outline>Oferecer atendimento</Button>
    </ContentButtonsWrapper>
  );
}

export default Buttons;