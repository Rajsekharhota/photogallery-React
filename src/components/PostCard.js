import React from "react";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>
        URL:
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          {post.url}
        </a>
      </p>
      <p>Meta Description: {post.meta_description || "N/A"}</p>
      <p>Word Count: {post.html.split(" ").length}</p>
      <p>
        Featured Image:{" "}
        {post.feature_image ? (
          <img
            src={post.feature_image}
            alt="Featured"
            width="250px"
            height="250px"
          />
        ) : (
          "N/A"
        )}
      </p>
    </div>
  );
}

export default PostCard;
