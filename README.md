# Desafio Front-End Lacrei Saúde

Este projeto é uma aplicação web estática, construída utilizando React.js, Trypescript e Styled Components. Além disso, para a realização de testes, foi instalada a biblioteca vitest em conjunto com as bibliotecas auxiliares.

#### acesse o deploy do repositório pelo [link](https://desafio-frontend-lacrei.vercel.app/) ou veja como rodar o projeto localmente em sua máquina!!

## Como Construir e Rodar o Projeto Localmente

### Usando node

<details>
<summary>Ver passos</summary>

> [!IMPORTANT]
>
> ### Pré-requisitos
>
> Node.js instalado (v14.0.0 ou superior)

### Passos

1. Clone o repositório para sua máquina:

```bash
git clone git@github.com:Buenno01/desafio-frontend-lacrei.git
```

2. Acesse o diretório do projeto na sua máquina através da CLI:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
yarn install
```

ou, se estiver utilizando npm:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

ou, com npm:

```bash
npm run dev
```

Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173) para ver o aplicativo em execução.

</details>

## Testes realizados

Como a aplicação é pequena e estática, foram escolhidos dois testes para serem realizados. O primeiro testa se a aplicação renderiza corretamente os componentes, enquanto o segundo verifica se o comportamento do botão de scroll é adequado.

<details>
<summary>Para testar a aplicação:</summary>

> [!IMPORTANT]
>
> ### Pré-requisitos
>
> Node.js instalado (v14.0.0 ou superior)

1. Acesse o diretório da aplicação em sua máquina através da CLI:

```bash
cd <nome-do-repositório>
```

2. Com o node instalado, baixe as dependências do projeto:

```bash
npm install
```

ou, se estiver utilizando o yarn:

```bash
yarn install
```

3. Em seguida execute o comando de teste:

```bash
npm run test
```

ou:

```bash
yarn run test
```

OBS: caso queira chegar a cobertura de testes, execute o comando:

```bash
npm run coverage
```

ou:

```bash
yarn run coverage
```

</details>

## Histórico e Workflow de Git

Este projeto utiliza o Git como sistema de controle de versão. O workflow básico segue os seguintes passos:

### Branches:

- `main`: Branch principal, contendo a versão estável do projeto.
- `<nome do componente ou página>/feature`: Branches para desenvolvimento de novas funcionalidades, criadas a partir da main.

### Fluxo de Trabalho (Workflow):

- O desenvolvimento de novas funcionalidades e correções é realizado em branches separadas.
- Após a conclusão do trabalho, é feito um pull request para mesclar as alterações na branch main, quando uma versão estável é alcançada.

Ao seguir este fluxo de trabalho, é possível manter um código mais organizado, com alterações sendo integradas de forma controlada e revisada antes de serem incorporadas à versão principal do projeto.
