import { v4 as uuidv4 } from 'uuid';

const users = [];

export function createUser(user) {
  user.id = uuidv4();

  users.push(user);
}

export function updateUser(user) {
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

export function getUserByEmail(id) {
  return users.find((item) => item.email === email);
}

export function removeUser(id) {
  const index = users.findIndex((item) => item.id === id);

  users.splice(index, 1);
}