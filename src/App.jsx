import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { getUsers } from "./services/userService";

function App() {
  // State för användardata, statusmeddelande och sökfält
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Laddar användare...");
  const [searchTerm, setSearchTerm] = useState("");

  // Hämtar användare från API när komponenten laddas första gången
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
        setStatus("Klart");
      } catch (error) {
        console.error("Fetch error:", error);
        setStatus("Fel vid hämtning av användare");
      }
    }

    loadUsers();
  }, []);

  // Filtrerar användare baserat på söktext (namn, email eller roll)
  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <div className="container">
        <h1>UserService React</h1>

        {/* Visar loading-state tills data är hämtad */}
        {status !== "Klart" ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>{status}</p>
          </div>
        ) : (
          // Visar antal användare efter filtrering
          <p className="user-count">Antal användare: {filteredUsers.length}</p>
        )}

        {/* Sökfält som uppdaterar searchTerm vid input */}
        <input
          type="text"
          placeholder="Sök efter namn, email eller roll..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Renderar lista av användare */}
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
