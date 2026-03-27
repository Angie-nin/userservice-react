import UserCard from "./UserCard";

// Renderar en lista av användare
function UserList({ users }) {
  // Visas om inga användare matchar sökningen
  if (users.length === 0) {
    return <p className="no-results">Inga användare hittades</p>;
  }

  return (
    <div className="user-grid">
      {/* Loopar igenom användare och renderar ett kort för varje */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
