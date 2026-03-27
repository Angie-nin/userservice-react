// Hämtar alla användare från UserService API
export async function getUsers() {
  const response = await fetch("https://localhost:7055/api/Users");

  // Om anropet misslyckas kastas ett fel som fångas i App.jsx
  if (!response.ok) {
    throw new Error("Kunde inte hämta användare");
  }

  // Returnerar JSON-data (lista av användare)
  return await response.json();
}