import { API_URL } from "./constant";

export async function fetchUsers() {
  const response = await fetch(`${API_URL}users.php`);
  return response.json();
}

// export async function fetchProducts() {
//   const response = await fetch(`${API_URL}products.php`);
//   return response.json();
// }

export async function addUser(name) {
  const response = await fetch(`${API_URL}users.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response.json();
}
