import { useEffect, useState } from "react";
import { getAllUsers } from "../api/userApi";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading, error };
}

export default useUsers;
