import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { PostTypes } from "../types/post.types";

const PostList: React.FC = () => {
  const [posts, setPost] = useState<PostTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>APIs Data</h1>
      <div className="grid grid-cols-4 gap-4">
        <CardPost posts={posts} />
      </div>
    </div>
  );
};

export default PostList;
