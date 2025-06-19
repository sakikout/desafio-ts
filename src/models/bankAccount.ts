import { v4 as uuidv4 } from 'uuid';
import { User } from './user';

// Array para armazenar as contas bancárias criadas
const bankAccounts : Array<BankAccount> = [];

// Interface para a conta bancária
interface BankAccountInterface {
  id: string;
  agency: string;
  number: string;
  balance: number;
  user: User;

  // Método para exibir detalhes da conta bancária
  showDetails : () => void;
  // Método para sacar dinheiro da conta bancária
  withdraw : (value: number) => number;
  // Método para depositar dinheiro na conta bancária
  deposit : (value: number) => number;
  
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

  constructor(agency: string, number: string, user: User) {
    this.id = uuidv4();
    this.agency = agency;
    this.number = number;
    this.balance = 0;
    this.user = user;

  }

  // Método para exibir detalhes da conta bancária
  showDetails() {
    console.log(`Conta Bancária:
      ID: ${this.id}
      Agência: ${this.agency}
      Número: ${this.number}
      Saldo: ${this.balance}
      Usuário: ${this.user.name}`);
  }

  // Método para tirar dinheiro da conta bancária
  withdraw(value: number) {
    if (value <= this.balance) {
      this.balance -= value;
    } else {
      console.log('Saldo insuficiente');
    }
    return this.balance;
  }

  // Método para adicionar dinheiro na conta bancária
  deposit(value: number) {
    this.balance += value;
    return this.balance;
  }

}

// Função para adicionar uma nova conta bancária no array
export function addBankAccount(bankAccount : BankAccount) {
  bankAccounts.push(bankAccount);
  console.log(`Conta bancária do usuário ${bankAccount.user.name} foi adicionada com sucesso!`);
  return bankAccount;
}

// Função para obter informações da conta bancária no array dado a agência e número
export function getBankAccountInfo(basicInfo : { agency: string; number: string; }) {
  const bankAccount = bankAccounts.find((item) => {
    return item.agency === basicInfo.agency && item.number === basicInfo.number;
  });

  return bankAccount;
}
