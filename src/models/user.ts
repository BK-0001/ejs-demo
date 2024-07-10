type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [
  { id: "1123", email: "bart@gmail.com", password: "1234" }
];

const findBy = (email: string): User | null => {
  // get user with email
  return users.find((user) => user.email === email) || null;
};

const create = () => {
  // create user
};

export const UserModel = { findBy, create };
