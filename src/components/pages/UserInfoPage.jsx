import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';

function UserInfoPage() {
  const { userId } = useParams();
  const { user, userPosts } = useUser(userId);

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <p>{user.company ? user.company.name : 'N/A'}</p>
      <h2>Posts:</h2>
      <ul>
        {userPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserInfoPage;
