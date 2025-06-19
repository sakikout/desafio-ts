# Desafio TypeScript
O conteúdo a seguir apresenta as respostas da segunda sprint do processo seletivo do TerraLab. Nessa sprint, aprofundamos no estudo do Typescript e fizemos a migração do código original (em Javascript) para essa linguagem. Apesar de falar no coletivo, o conteúdo contido nesse repositório foi feito unicamente por mim, adaptando do repositório original do usuário **caiulucas**.

## Instruções
Para executar o projeto, primeiro rode o comando: ```npm i``` para baixar as dependências do projeto.

A função `uuidv4` serve apenas para gerar uma string que será usada como o id quando necessário.

Para compilar e rodar o projeto você primeiro deve executar o comando `npx tsc` para transformar os arquivos `.ts` em `.js`.
Depois disso, os arquivos compilados estarão na pasta `dist`. Para executar, basta executar o seguinte comando: `node ./dist/index.js`.

## Questões teóricas

### 1. O que exatamente é o Typescript?
**TypeScript** é um superset (superconjunto) do JavaScript criado pela Microsoft. Ele adiciona alguns recursos à JavaScript, como tipagem estática, interfaces, classes e outros recursos da programação orientada a objetos (POO).


### 2. Descreva os tipos básicos do Typescript.
Os tipos básicos/primitivos do Typescript são:
- `number (inteiro ou decimal)`: Representa valores numéricos, incluindo inteiros e decimais. Exemplo: `let age: number = 30;`
- `boolean (true ou false)`: Representa valores verdadeiros ou falsos. Exemplo: `let isPerson: boolean = true;`
- `string (texto)`: Representa dados textuais (pode ser um caractere ou um conjunto de caracteres). Exemplo: `let name: string = "John Doe";`
- `null`: Representa a ausência intencional de um valor. Exemplo: `let value: null = null;`
- `undefined`: Representa uma variável que foi declarada, mas ainda não foi atribuída a nenhum valor. Exemplo: `let undefinedValue: undefined = undefined;`
- `symbol`: Representa um identificador unico e imutável. Mesmo usando a mesma string para criar dois símbolos diferentes, eles não serão iguais. Exemplo: `let uniqueSymbol: symbol = Symbol("id");`
- `bigint`: Representa números inteiros grandes, que o tipo number não é capaz de aguentar. Exemplo: `let bigNumber: bigint = 12345678901234567890n;`
- `object`: Representa todos os tipos que não são primitivos. No caso, é um "conjunto" de tipos primitivos; Exemplo: `let person: object = { name: "John Doe", age: 21 };`


### 3. O que é uma interface?
Uma **interface** é uma forma de definir a estrutura de um objeto. Ela é usada para dizer quais propriedades, métodos e tipos um objeto deve ter. Ela define o que ele oferece ao exterior, especificamente os métodos que podem ser chamados. Por isso, dizemos que interfaces focam apenas em definir o comportamento esperado de um objeto. Elas não possuem atributos e não podem ser instanciadas, mas podem herdar de outras interfaces.


### 4. O que é uma classe?
Uma **classe** é um modelo ou estrutura que define as características e os comportamentos que um objeto pode ter. Em uma classe, há a implementação dos métodos, tanto métodos da própria classe quanto aqueles definidos por uma interface (caso a classe seja uma extensão da interface), e também a definição dos atributos. Elas podem ter estados, podem ser instanciadas e podem herdar de outras classes ou interfaces.


### 5. O que é a herança?
A **herança** é um conceito na programação orientada a objetos que permite a criação de classes que possuem métodos e atributos de outras classes. Em outras palavras, essas classes podem compartilhar entre si métodos e atributos, estendendo e personalizando seu comportamento. Classes também podem herdar múltiplas interfaces, mas o contrário não é válido. 

### 6. Quais as vantagens de usar o Typescript ao invés de somente o Javascript?
| Vantagens  | Descrição |
| ------------- | ------------- |
| Tipagem estática  | Detecta erros antes de rodar o código  |
| Melhor Experiência de Desenvolvimento  | Oferece suporte a recursos como autocompletar, navegação de código mais eficiente e documentação embutida.  |
| Refatoração mais segura | Consegue apontar qualquer incompatibilidade de tipo resultante |
| Melhora documentação e colaboração | O próprio código já explica o que espera de cada função/objeto |
| Escalabilidade | Ajuda a manter a qualidade do código à medida que o projeto cresce, tornando a manutenção e o desenvolvimento contínuo mais gerenciáveis |

## Questões práticas
- [x] Agora que você é bem familiarizado com o Typescript, vamos criar um simples projeto: <br>
Primeiro, clone o repositório anexado em sua máquina;
Como deve ter notado, na pasta `src` temos uma pasta `model` e um arquivo `index.js`. Por enquanto apenas guarde essas informações;

- [x] Comece pelo arquivo `users.js` na pasta `models`. Nele, você deverá adicionar tipagem para as funções e também para o user. Antes de mais nada renomeie o arquivo para `users.ts`. Um user possui os seguintes atributos: `id`, `name`, `age` e `email`. Use de seu conhecimento na criação de interfaces para resolver esta questão;
  
- [x] Agora, indo para o arquivo `bankAccount.js` na pasta `models`, você deverá adicionar tipagem para as funções e também para a bankAccount. Como na questão anterior, renomeie o arquivo para `bankAccount.ts`. Nessa questão você deverá identificar quais são os atributos da bankAccount de acordo com o que há disponível nas funções. De novo, use seus conhecimentos sobre interfaces e typescript para resolver a questão.

- [x] Após ter feito a tipagem dos arquivos da pasta `models` é hora de resolver os erros do arquivo `index.js`. Comece trocando sua extensão para `index.ts`. Você logo verá que alguns erros estão acontecendo. Antes não seria possível identificá-los, pois nenhum dos arquivos possuía tipagem. O que você precisa fazer agora é basicamente corrigir os erros de acordo com o que o intellisense do seu editor de códigos indicar. 

- [x] Com os erros resolvidos, precisamos apenas testar o código e executar a função de `withdraw` e a função de `deposit` da `bankAccount`. Para isso, primeiro deposite a quantia de 1000 unidades monetárias (um) e faça um saque de 200um. Para verificar se deu tudo certo, use a função `getBankAccountInfo` e dê um `console.log` na conta obtida.

## Desafio extra
- [ ] Refatore o projeto, mas usando classes para criar os `users` e as `bankAccounts`;