import React from "react";
import { User } from "../../types/user.types";

type CardUserProps = {
  users: User[];
};

const CardUser: React.FC<CardUserProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="bg-gray-50/5 p-5 rounded-lg" key={user.id}>
          <h2 className="text-fuchsia-500 font-semibold text-lg mb-2">
            Username: {user.username}
          </h2>
          <p className="text-gray-400">Email: {user.email}</p>
          <p className="text-gray-400">Status: {user.status}</p>
          <p className="text-gray-400">Role: {user.role}</p>
        </div>
      ))}
    </>
  );
};

export default CardUser;
