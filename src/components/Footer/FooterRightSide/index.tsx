import FooterColumn from "./FooterColumn";

const columns = [
  [
    'Lacrei Saúde',
    'Quem Somos',
    'Nosso Propósito',
    'Missão, Visão e Valor',
    'Acessibilidade',
  ],
  [
    'Saúde',
    'Buscar atendimento',
    'Oferecer atendimento',
  ],
  [
    'Segurança e Privacidade',
    'Política de Privacidade',
    'Termos de Uso',
    'Direitos de Titular',
  ],
];

function FooterRightSide() {
  return (
    <FooterColumn>
      {
        columns.map((column) => {
          const [title, ...links] = column;
          return (
          <div key={ title }>
            <h3>
              { title }
            </h3>
            <nav>
            {
              links.map((link) => (
                <li>
                  <a key={ link } href="#">
                    { link }
                  </a>
                </li>
              ))
            }
            </nav>
          </div>
        )})
      }
    </FooterColumn>
  );
}

export default FooterRightSide;