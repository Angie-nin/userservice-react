// Visar information om en enskild användare
function UserCard({ user }) {
  // Bestämmer styling beroende på användarens roll
  const roleClass =
    user.role.toLowerCase() === "admin"
      ? "role-badge admin"
      : "role-badge user";

  return (
    <div className="user-card">
      <h2>{user.fullName}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Roll:</strong> <span className={roleClass}>{user.role}</span>
      </p>
    </div>
  );
}

export default UserCard;
