# DESAFIO TYPESCRIPT

Use esse espaço para responder às questões teóricas:

## Instruções
Para executar o projeto, primeiro rode o comando: ```npm i``` para baixar as dependências do projeto.

## Questões teóricas

- [ ] O que exatamente é o Typescript?

- [ ] Descreva os tipos básicos do Typescript.

- [ ] O que é uma interface?

- [ ] O que é uma classe?
  
- [ ] O que é a herança?
  
- [ ] Quais as vantagens de usar o Typescript ao invés de somente o Javascript?

## Questões práticas
- [ ] Agora que você é bem familiarizado com o Typescript, vamos criar um simples projeto: <br>
Primeiro, clone o repositório anexado em sua máquina;
Como deve ter notado, na pasta `src` temos uma pasta `model` e um arquivo `index.js`. Por enquanto apenas guarde essas informações;

- [ ] Comece pelo arquivo `users.js` na pasta `models`. Nele, você deverá adicionar tipagem para as funções e também para o user. Antes de mais nada renomeie o arquivo para `users.ts`. Um user possui os seguintes atributos: `id`, `name`, `age` e `email`. Use de seu conhecimento na criação de interfaces para resolver esta questão;
  
- [ ] Agora, indo para o arquivo `bankAccount.js` na pasta `models`, você deverá adicionar tipagem para as funções e também para a bankAccount. Como na questão anterior, renomeie o arquivo para `bankAccount.ts`. Nessa questão você deverá identificar quais são os atributos da bankAccount de acordo com o que há disponível nas funções. De novo, use seus conhecimentos sobre interfaces e typescript para resolver a questão.

- [ ] Após ter feito a tipagem dos arquivos da pasta `models` é hora de resolver os erros do arquivo `index.js`. Comece trocando sua extensão para `index.ts`. Você logo verá que alguns erros estão acontecendo. Antes não seria possível identificá-los, pois nenhum dos arquivos possuía tipagem. O que você precisa fazer agora é basicamente corrigir os erros de acordo com o que o intellisense do seu editor de códigos indicar. 

- [ ] Com os erros resolvidos, precisamos apenas testar o código e executar a função de `withdraw` e a função de `deposit` da `bankAccount`. Para isso, primeiro deposite a quantia de 1000 unidades monetárias (um) e faça um saque de 200um. Para verificar se deu tudo certo, use a função `getBankAccountInfo` e dê um `console.log` na conta obtida.

## Desafio extra
- [ ] Refatore o projeto, mas usando classes para criar os `users` e as `bankAccounts`;