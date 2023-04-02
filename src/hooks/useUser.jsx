import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import { getPosts } from "../api/postApi";

function useUser(userId) {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        setUser(response.data);

        getPosts(userId)
          .then((response) => {
            if (Array.isArray(response.data)) {
              setUserPosts(response.data);
            } else {
              console.error("Error fetching user posts: response is not an array");
            }
          })
          .catch((error) => {
            console.error("Error fetching user posts:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  console.log("user object:", user);

  return { user, userPosts };
}

export default useUser;
