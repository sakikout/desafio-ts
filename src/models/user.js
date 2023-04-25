const users = [];

export function createUser(user) {
  users.push(user);
}

export function updateUser(user) {
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

export function getUserById(id) {
  return users.find((item) => item.id === id);
}

export function removeUser(id) {
  const index = users.findIndex((item) => item.id === id);

  users.splice(index, 1);
}