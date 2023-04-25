import { createBankAccount } from './models/bankAccount';
import { createUser } from './models/user';

createUser({ name: 'John Doe', age: 21 });

// TODO - pegar usuário criado e passar como parâmetro para a função createBankAccount
createBankAccount(user, { agency: '0001' });

// TODO - pegar conta criada, realizar um depósito e um saque