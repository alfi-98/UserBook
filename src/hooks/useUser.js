import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersData = await getUsers();
      setUsers(usersData);
    }

    fetchUsers();
  }, []);

  return users;
}

export default useUsers;