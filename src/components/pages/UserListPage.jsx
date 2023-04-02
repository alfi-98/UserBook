import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import './../../styles/userListPage.css';

function UserListPage() {
  const { users, isLoading, error } = useUsers();
  const [searchValue, setSearchValue] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter users based on search input value
  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>UserBook</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Go</button>
      </div>
      <div className="user-list">
        {filteredUsers.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="user-card">
            <div className="avatar-container">
              <img src={user.image} alt="User Avatar" className="user-avatar" />
            </div>
            <h2 className="card-text-lg">
              {user.firstName} {user.lastName}
            </h2>
            <div className="card-secondary-container">
              <p className="card-text-md">{user.email}</p>
              <p className="card-text-md">{user.company.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserListPage;
