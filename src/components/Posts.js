import React, { useState, useEffect, useContext } from "react";
import { allPostsContext } from "../Api/GhostContext";
import PostCard from "./PostCard";

function Posts() {
  let allPostsData = useContext(allPostsContext);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (allPostsData && allPostsData.data.posts) {
      // Filter posts based on your criteria
      const filtered = allPostsData.data.posts.filter((post) => {
        // Check criteria and adjust conditions as needed
        return (
          !post.meta_description ||
          post.meta_description.length > 250 ||
          post.url.length > 100 ||
          !post.feature_image ||
          post.html.split(" ").length < 250 ||
          post.html.split(" ").length > 1500
        );
      });

      setFilteredPosts(filtered);
    }
  }, [allPostsData]);

  if (!allPostsData || !allPostsData.data || !allPostsData.data.posts) {
    return <div>Loading...</div>;
  }

  //console.log(allPostsData.data.posts);

  return (
    <div className="posts-container">
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
