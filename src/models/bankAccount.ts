import { v4 as uuidv4 } from 'uuid';
import { User } from './user';

// Array para armazenar as contas bancárias criadas
const bankAccounts : Array<BankAccount> = [];

// Interface para a conta bancária
export interface BankAccount {
  id: string;
  agency: string;
  number: string;
  balance: number;
  user: User;

  // Método para exibir detalhes da conta bancária
  showDetails : () => void;
}

// Função para criar uma nova conta bancária
// Recebe um usuário e um objeto com a agência e número da conta e retorna uma nova conta bancária
export function createBankAccount(user : User, basicInfo : { agency: string; number: string; }) {
  const bankAccount : BankAccount = {
    id: uuidv4(),
    agency: basicInfo.agency,
    number: basicInfo.number,
    balance: 0,
    user,
    showDetails: () => {
      console.log(`Conta Bancária:
        ID: ${bankAccount.id}
        Agência: ${bankAccount.agency}
        Número: ${bankAccount.number}
        Saldo: ${bankAccount.balance}
        Usuário: ${bankAccount.user.name}`);
    }
  };

  bankAccounts.push(bankAccount);

  return bankAccount;
}

// Função para tirar dinheiro da conta bancária
export function withdraw(bankAccount : BankAccount, value : number) {
  if (value < bankAccount.balance) {
    bankAccount.balance -= value;
  } else {
    console.log('Saldo insuficiente');
  }

  return bankAccount.balance;
}

// Função para depositar dinheiro na conta bancária
export function deposit(bankAccount : BankAccount, value : number) {
  bankAccount.balance += value;

  return bankAccount.balance;
}

// Função para obter informações da conta bancária no array dado a agência e número
export function getBankAccountInfo(basicInfo : { agency: string; number: string; }) {
  const bankAccount = bankAccounts.find((item) => {
    return item.agency === basicInfo.agency && item.number === basicInfo.number;
  });

  return bankAccount;
}
