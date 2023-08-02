
# [To do list](https://lista-de-tarefas-em-react.vercel.app/)

![Logo do Projeto](vite-project/public/vite.svg)

Descrição curta do projeto e o que ele faz.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Estilos](#estilos)
- [Dependências](#dependências)

## Visão Geral

O projeto To-Do List em React com Styled Components é uma aplicação que permite aos usuários criar, gerenciar e acompanhar tarefas a serem realizadas, conhecidas como "to-do tasks". A aplicação foi desenvolvida utilizando a biblioteca React para a construção do frontend e Styled Components para a estilização dos componentes.

A interface do To-Do List é intuitiva e amigável, facilitando a interação do usuário com a aplicação. Na página principal, o usuário pode ver uma lista de todas as tarefas adicionadas, onde cada tarefa é representada por um card. Cada card contém a descrição da tarefa e um botão de marcação de conclusão, representado por um checkbox personalizado.

Quando o usuário clica no checkbox, a tarefa é marcada como concluída e a interface atualiza visualmente para refletir essa mudança. Tarefas concluídas podem ser facilmente identificadas por meio de uma formatação de texto específica ou um ícone que as diferencia das tarefas não concluídas.

A parte central da aplicação é o formulário de adição de novas tarefas, localizado na parte superior da página. O usuário pode digitar a descrição da tarefa no campo de input e, em seguida, clicar no botão "criar" para adicionar a tarefa à lista. Após adicionar uma tarefa, ela aparece imediatamente na lista, permitindo que o usuário a visualize e a gerencie.

Além disso, o To-Do List conta com uma contagem dinâmica no topo da página que exibe o número total de tarefas criadas e o número de tarefas concluídas. Essa contagem é atualizada automaticamente sempre que o usuário adiciona ou conclui uma tarefa, mantendo-o informado sobre o status das suas tarefas.

A aplicação também oferece funcionalidades adicionais, como a possibilidade de editar a descrição de uma tarefa já existente ou excluir uma tarefa da lista. Para realizar essas ações, o usuário pode interagir com botões de edição e exclusão exibidos ao lado de cada tarefa na lista.

A estilização do projeto é feita com Styled Components, o que permite a criação de componentes reutilizáveis e facilita a manutenção e organização do código CSS. As cores, fontes, espaçamentos e outros elementos visuais são cuidadosamente escolhidos para proporcionar uma experiência de usuário agradável e moderna.

Em resumo, o To-Do List em React com Styled Components é uma aplicação funcional e esteticamente agradável que permite aos usuários organizar suas tarefas de forma simples e eficiente. Seu design limpo e responsivo torna a interação com a aplicação uma experiência fluída e agradável, tornando-o uma ótima opção para quem busca uma solução prática para a gestão de tarefas diárias.

## Pré-requisitos

node js

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/MathMendesReis/Lista-de-Tarefas-em-React.git
```

2. Acesse a pasta do projeto:

```bash
cd vite-project
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```



## Estrutura do Projeto

Descreva brevemente a estrutura de pastas do projeto e explique a finalidade de cada pasta principal.

```
src/
  ├── components/  # Componentes reutilizáveis do projeto
  ├── pages/       # Páginas do aplicativo
  ├── styles/      # Estilos globais e estilos do tema
  ├── utils/       # Funções e utilitários
  ├── App.js       # Ponto de entrada do aplicativo
  └── index.js     # Arquivo de inicialização do React
```



## Dependências

- React ts
- Styled components
- Icons do material ui








