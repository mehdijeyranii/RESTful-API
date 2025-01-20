import React from "react";
// import PostList from "./components/PostList";
import { UserList } from "./components/users";
import CreateData from "./components/CRUD/CreateData";

const App: React.FC = () => {
  return (
    <div>
      {/* <PostList /> */}
      <UserList />
      <CreateData />
    </div>
  );
};

export default App;
