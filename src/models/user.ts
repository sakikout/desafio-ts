import { v4 as uuidv4 } from 'uuid';

// Criando uma interface para o usuário
export interface User {
  id : string;
  name: string;
  email: string;
  age : number;

  // Método para exibir informações do usuário
  showUserInfo : () => void;

}

// Array para armazenar os usuários criados
const users : Array<User> = [];

// Função para criar um novo usuário
// Recebe um objeto com as propriedades do usuário e retorna um novo usuário
export function createUser(user : { name: string; email: string; age: number; }) {
  const newUser : User = {
    id: uuidv4(),
    name: user.name,
    email: user.email,
    age: user.age,
    showUserInfo: () => {
      console.log(`Usuário:
        ID: ${newUser.id}
        Nome: ${newUser.name}
        Email: ${newUser.email}
        Idade: ${newUser.age}`);
    }
  };

  users.push(newUser);

  return newUser;
}

// Função para atualizar um usuário no array de usuários
export function updateUser(user : User) {
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

// Função para buscar um usuário dado seu email
export function getUserByEmail(email : string) {
  return users.find((item) => item.email === email);
}

// Função para remover um usuário dado seu ID
export function removeUser(id : string) {
  const index = users.findIndex((item) => item.id === id);

  users.splice(index, 1);
}