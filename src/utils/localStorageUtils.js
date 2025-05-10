const USERS_KEY =  "users";
const SESSION_KEY = "sesssion";

const defaultUsers = [
  {id : "1",role: "Admin", email:"admin@entnt.in", password:"admin123"},
  {id : "2",role: "Inspector", email:"inspector@entnt.in", password:"inspect123"},
  {id : "3",role: "Engineer", email:"engineer@entnt.in", password:"engine123"},
];

export const initializeUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  if (!users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];
export const saveSession = (user) => localStorage.setItem(SESSION_KEY, JSON.stringify(user));
export const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY));
export const clearSession = () => localStorage.removeItem(SESSION_KEY);