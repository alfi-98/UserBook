import useUsers from '../../hooks/useUsers.jsx';

function UserListPage() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      {users?.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserListPage;
