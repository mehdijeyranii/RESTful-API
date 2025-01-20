import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        console.log("Data received:", data);
      } catch (error) {
        console.log("Error in data received", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="w-1/4 mx-auto mt-16 flex flex-col gap-4">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-gray-50/5 px-4 py-2 focus:outline-none border-b border-gray-300"
        />
        <p>Value: {inputValue}</p>
        <button>Change</button>
        <hr />
        <p>Input text is {inputValue}</p>
        <p>Count: {count}</p>
        {isLoading ? <p>Loading...</p> : <p>Hello my family</p>}
      </div>
    </div>
  );
};

export default App;
