import { v4 as uuidv4 } from 'uuid';

// Criando uma interface para o usuário
export interface UserInterface {
  id : string;
  name: string;
  email: string;
  age : number;

  // Método para exibir informações do usuário
  showUserInfo : () => void;

}

export class User implements UserInterface {
  id: string;
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.age = age;
  }

  // Método para exibir informações do usuário
  showUserInfo() {
    console.log(`Usuário:
      ID: ${this.id}
      Nome: ${this.name}
      Email: ${this.email}
      Idade: ${this.age}`);
  }
}

// Array para armazenar os usuários criados
const users : Array<User> = [];

// Função para adicionar um novo usuário ao array de usuários
export function addUser(user : User) {
  users.push(user);
  console.log(`Usuário ${user.name} adicionado com sucesso ao banco de usuários!`);
  return user;
}

// Função para atualizar um usuário no array de usuários
export function updateUser(user : User) {
  const index = users.findIndex((item) => item.id === user.id);
  if (index === -1) {
    console.log('Usuário não encontrado');
    return -1;
  }

  users[index] = user;
  return index;
}

// Função para buscar um usuário dado seu email
export function getUserByID(id : string) {
  const user = users.find((item) => item.id === id);

  if (!user) {
    console.log('Usuário não encontrado');
    return null;
  }

  return user;
}

// Função para buscar um usuário dado seu email
export function getUserByEmail(email : string) {
  const user = users.find((item) => item.email === email);

  if (!user) {
    console.log('Usuário não encontrado');
    return null;
  }

  return user;
}

// Função para remover um usuário dado seu ID
export function removeUser(id : string) {
  const index = users.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log('Usuário não encontrado');
    return null;
  }

  return users.splice(index, 1);
}