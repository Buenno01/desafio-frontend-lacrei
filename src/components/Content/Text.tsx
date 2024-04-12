import ContentTextWrapper from "../../assets/wrappers/ContentTextWrapper";
import BreakLine from "./BreakLine";
import Buttons from "./Buttons";
import Title from "./Title";

function Text() {
  return (
    <ContentTextWrapper>
      <Title>
        Junte-se à nossa comunidade
      </Title>
      <BreakLine />
      <p>
        Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.
      </p>
      <Buttons />
    </ContentTextWrapper>
  );
}

export default Text;
