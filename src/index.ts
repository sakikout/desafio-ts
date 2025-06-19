import { addBankAccount, BankAccount, getBankAccountInfo } from './models/bankAccount';
import promptSync from 'prompt-sync';
import { addUser, getUserByEmail, getUserByID, removeUser, updateUser, User } from './models/user';

// Importando a biblioteca prompt-sync para capturar entradas do usuário
const prompt = promptSync();

// TODO - criar usuário com dados de input
const userName = prompt('Digite seu nome: ') ?? '';
const userEmail = prompt('Digite seu email: ') ?? '';
const userAge = parseInt(prompt('Digite sua idade: ') || '0', 18);


// TODO - criar usuário com dados fornecidos
const newUser = new User(
    userName,
    userEmail,
    userAge
);

// Adicionar o usuário criado ao array de usuários
addUser(newUser);

// TODO - exibir os dados do usuário criado
newUser.showUserInfo?.();

// Verifica se o usuário é menor de idade para criar a conta bancária

if (newUser.age < 18) {
    console.log('Usuário menor de idade, não é possível criar conta bancária.');

} else {
    const agencyNumber = prompt('Digite o número da agência: ') ?? '';
    const accountNumber = prompt('Digite o número da conta: ') ?? '';

    // TODO - criar uma nova conta bancária com dados fornecidos associada ao usuário criado
    const newBankAccount = new BankAccount(
        agencyNumber,
        accountNumber,
        newUser
    )

    // TODO - adiciona a nova conta bancária ao array de contas bancárias
    addBankAccount(newBankAccount);

    // TODO - realizar um depósito e um saque na conta bancária criada
    const depositAmount = parseFloat(prompt('Digite o valor do depósito: ') || '0');
    const withdrawAmount = parseFloat(prompt('Digite o valor do saque: ') || '0');

    newBankAccount.deposit(depositAmount);
    newBankAccount.withdraw(withdrawAmount);

    // TODO - pegar conta bancária criada e exibir os detalhes
    console.log(newBankAccount.showDetails?.());
}

// TODO - Menu de opções para o usuário
console.log(`
    Menu de Opções:
    1. Criar Usuário
    2. Buscar Usuário por Email
    3. Atualizar Usuário
    4. Remover Usuário
    5. Criar Conta Bancária
    6. Buscar Conta Bancária
    7. Sair
`);

let menuOption = prompt('Escolha uma opção: ');
while (menuOption !== '7') {

    switch (menuOption) {
        case '1':
            const userName = prompt('Digite seu nome: ') ?? '';
            const userEmail = prompt('Digite seu email: ') ?? '';
            const userAge = parseInt(prompt('Digite sua idade: ') || '0', 18);

            const newUser = new User(
                userName,
                userEmail,
                userAge
            );

            addUser(newUser);
            newUser.showUserInfo?.();
            break;

        case '2':
            const emailToSearch = prompt('Digite o email do usuário a ser buscado: ') ?? '';
            const foundUser = getUserByEmail(emailToSearch);
            if (foundUser) {
                console.log(`Usuário encontrado: ${foundUser.name}!`);
                foundUser.showUserInfo?.();
            }
            break;

        case '3':
            const answer = prompt('1 - Atualizar usuário por ID\n2 - Atualizar usuário por email\nEscolha uma opção: ');
            if (answer === '1') {
                const userIdToUpdate = prompt('Digite o ID do usuário a ser atualizado: ') ?? '';
                const userToUpdate = getUserByID(userIdToUpdate);
                if (userToUpdate) {
                    updateUser(userToUpdate);
                }
                
            } else {
                const userEmailToUpdate = prompt('Digite o email do usuário a ser atualizado: ') ?? '';
                const userToUpdate = getUserByEmail(userEmailToUpdate);
                if (userToUpdate) {
                    updateUser(userToUpdate);
                }
            }
            break;

        case '4':
            const userIdToRemove = prompt('Digite o ID do usuário a ser removido: ') ?? '';
            const userToRemove = getUserByID(userIdToRemove);
            if (userToRemove) {
                removeUser(userToRemove.id);
            }
            break;
        
        case '5':
            const agencyNumber = prompt('Digite o número da agência: ') ?? '';
            const accountNumber = prompt('Digite o número da conta: ') ?? '';
            const userEmailForAccount = prompt('Digite o email do usuário para criar a conta: ') ?? '';
            const userForAccount = getUserByEmail(userEmailForAccount);
            if (userForAccount) {
                const newBankAccount = new BankAccount(agencyNumber, accountNumber, userForAccount);
                addBankAccount(newBankAccount);
            } else {
                console.log('Não foi possível criar conta bancária com o usuário fornecido.');
            }
            break;

        case '6':
            const agencyToSearch = prompt('Digite o número da agência: ') ?? '';
            const accountToSearch = prompt('Digite o número da conta: ') ?? '';
            const bankAccountInfo = getBankAccountInfo({ agency: agencyToSearch, number: accountToSearch });
            if (bankAccountInfo) {
                console.log(`Conta bancária encontrada:
                Agência: ${bankAccountInfo.agency}
                Número: ${bankAccountInfo.number}
                Titular: ${bankAccountInfo.user.name}`);
            }
            break;

        case '7':
            console.log('Saindo do programa...');
            break;

        default:
            console.log('Opção inválida, tente novamente.');
            break;
    }

    menuOption = prompt('Escolha uma opção: ');

}
