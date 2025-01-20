import React from "react";
import { PostTypes } from "../types/post.types";

type CardPostTypes = {
  posts: PostTypes[];
};

const CardPost: React.FC<CardPostTypes> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="bg-gray-50/5 p-5 rounded-lg" key={post.id}>
          <h2 className="text-fuchsia-500 font-semibold text-lg mb-2">
            {post.title}
          </h2>
          <p className="text-gray-400">{post.description}</p>
          <div className="flex flex-col my-2">
            <span className="text-sm">Author: {post.author}</span>
            <span className={post.isPublished ? "text-rose-500" : "text-white"}>
              {post.isPublished
                ? "This post is published"
                : "This post is not published"}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardPost;
