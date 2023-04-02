import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { getPosts } from "../api/postApi";

function useUser(userId) {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });


      getPosts(userId)
      .then(posts => {
        setUserPosts(posts);
      })
      .catch(error => {
        console.error("Error fetching user posts:", error);
      });
  }, [userId]);

  console.log("user object:", user);

  return { user, userPosts };
}

export default useUser;
