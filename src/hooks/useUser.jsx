import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { getPosts } from "../api/postApi";

function useUser(userId) {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchUserAndPosts() {
      const userData = await getUserById(userId);
      setUser(userData);

      const userPostsData = await getPosts(userId);
      setUserPosts(userPostsData);
    }

    fetchUserAndPosts();
  }, [userId]);

  return { user, userPosts };
}

export default useUser;