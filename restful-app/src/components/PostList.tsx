import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { PostTypes } from "../types/post.types";

const PostList: React.FC = () => {
  const [posts, setPost] = useState<PostTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch("http://localhost:3000/posts");

          if (!response.ok) {
            throw new Error(`HTTP Error!, Status: ${response.status}`);
          }

          const data = await response.json();
          setPost(data);
          setLoading(false);
        }, 3000);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
        setError(
          "An error occurred while fetching the data. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center my-4">APIs Data</h1>
      <div
        className={`w-full h-screen ${
          loading ? "grid place-content-center" : "grid grid-cols-4 gap-4"
        }`}
      >
        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : error ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <CardPost posts={posts} />
        )}
      </div>
    </div>
  );
};

export default PostList;
