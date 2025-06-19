import { createBankAccount, deposit, getBankAccountInfo, withdraw } from './models/bankAccount';
import { createUser } from './models/user';


// TODO - criar usuário com dados fictícios
const newUser = createUser({
    name: 'John Doe', 
    age: 21,
    email: 'johndoe@example.com'
});

// TODO - exibir os dados do usuário criado
newUser.showUserInfo?.();

// TODO - pegar usuário criado e passar como parâmetro para a função createBankAccount
const bankAccount = createBankAccount(newUser, { agency: '0001', number: '00000001' });

// TODO - realizar um depósito e um saque na conta bancária criada
deposit(bankAccount, 1000);
withdraw(bankAccount, 200);

// TODO - pegar conta bancária criada e exibir os detalhes
console.log(getBankAccountInfo({ agency: '0001', number: '00000001' })?.showDetails?.());

// TODO - pegar conta criada, realizar um depósito e um saque