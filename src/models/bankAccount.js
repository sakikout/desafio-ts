import { v4 as uuidv4 } from 'uuid';

const bankAccounts = [];

export function createBankAccount(user, basicInfo) {
  const bankAccount = {
    id: uuidv4(),
    agency: basicInfo.agency,
    number: basicInfo.number,
    balance: 0,
    user
  }

  bankAccounts.push(bankAccount);
}

export function withdraw(bankAccount, value) {
  if (value < bankAccount.balance) {
    bankAccount.balance -= value;
  } else {
    console.log('Saldo insuficiente');
  }

  return bankAccount.balance;
}

export function deposit(bankAccount, value) {
  bankAccount.balance += value;

  return bankAccount.balance;
}

export function getBankAccountInfo(basicInfo) {
  const bankAccount = bankAccounts.find((item) => {
    return item.agency === basicInfo.agency && item.number === basicInfo.number;
  });

  return bankAccount;
}
