import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import './../../styles/userInfoPage.css';

function UserInfoPage() {
  const { userId } = useParams();
  const { user, userPosts } = useUser(userId);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  if (!userPosts) {
    return <div>Loading user posts...</div>;
  }

  return (
    <div className="info-container">
      <h1 className="title">User Info</h1>
      <div className="user-info-container">
        <div className="user-info">
          <h1 className="user-name">{user.firstName} {user.lastName}</h1>
          <div className="info-avater-container">
            <img src={user.image} alt="User Avatar" className="user-info-avatar" />
            <div className="user-info-text">
              <div>
                <p className="small-heading">Email</p>
                <p className="user-email">{user.email}</p>
              </div>
              <div>
                <p className="small-heading">Company Name</p>
                <p className="user-company">{user.company ? user.company.name : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-posts">
        <h2>Posts</h2>
        {userPosts.length > 0 ? (
        <div className="post-container">
        <ul>
          {userPosts.map(post => (
            <li key={post.id}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
}

export default UserInfoPage;
