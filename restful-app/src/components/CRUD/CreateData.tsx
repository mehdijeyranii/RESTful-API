import axios from "axios";
import { useState } from "react";

const CreateData = () => {
  const [username, setUsername] = useState("");

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:3000/users", {
        username,
      });
      alert("Data created successfully!");
    } catch (err) {
      console.error(`Error fetching data: ${err}`);
    }
  };

  return (
    <div className="p-5">
      <h2>Create New Data</h2>
      <input
        className="bg-gray-50/5 p-2"
        type="text"
        name="newData"
        id="newData"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateData;
