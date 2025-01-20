import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../../types/user.types";
import CardUser from "./CardUser";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    };

    fetchData();
  }, [users]);

  console.log(users);

  return (
    <div>
      <h1>APIs Users</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {users ? <CardUser users={users} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default UserList;
