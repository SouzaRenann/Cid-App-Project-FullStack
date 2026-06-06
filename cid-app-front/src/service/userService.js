import api from "./api";

export function getUsers() {
  return api.get("/user");
}

export function createUser(user) {
  return api.post("/auth/register", user);
}

export function deleteUser(id) {
  return api.delete(`/user/${id}`);
}