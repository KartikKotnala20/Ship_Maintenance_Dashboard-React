// User & Session Keys
export const USERS_KEY = "users";
export const SESSION_KEY = "session";  

// Default Users
const defaultUsers = [
  { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
  { id: "2", role: "Inspector", email: "inspector@entnt.in", password: "inspect123" },
  { id: "3", role: "Engineer", email: "engineer@entnt.in", password: "engine123" },
];

// Initialize default users in localStorage if none exist
export const initializeUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  if (!users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

// Get users from localStorage
export const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];

// Save logged-in user session
export const saveSession = (user) => localStorage.setItem(SESSION_KEY, JSON.stringify(user));

// Get current session user
export const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY));

// Clear current session
export const clearSession = () => localStorage.removeItem(SESSION_KEY);

// ------------------------
// Notifications Section
// ------------------------

export const NOTIFICATIONS_KEY = "notifications";

// Get notifications from localStorage
export const getNotifications = () => {
  const data = localStorage.getItem(NOTIFICATIONS_KEY);
  return data ? JSON.parse(data) : [];
};

// Add a new notification
export const addNotification = (type, message) => {
  const notifications = getNotifications();
  const newNotification = {
    id: Date.now().toString(),
    type, // e.g., "created", "updated", "completed"
    message,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify([newNotification, ...notifications]));
};

// Remove notification by id
export const removeNotification = (id) => {
  const notifications = getNotifications();
  const updated = notifications.filter((n) => n.id !== id);
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updated));
};