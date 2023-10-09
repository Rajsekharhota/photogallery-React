import React, { useContext } from "react";
import loadingGif from "../assets/loading.gif";
import { allPostsContext } from "../Api/GhostContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Dashboard() {
  let allPostsData = useContext(allPostsContext);

  if (!allPostsData || !allPostsData.data || !allPostsData.data.posts) {
    return <div>Loading...</div>;
  }

  const authors = allPostsData.data.posts.map((post) => post.authors);

  const tags = allPostsData.data.posts.map((tag) => tag.tags);

  if (!allPostsData) {
    return (
      <div className="loader-container">
        <img src={loadingGif} alt="loader" className="loading-gif" />
      </div>
    );
  }

  const totalPosts = Array.isArray(allPostsData.data.posts)
    ? allPostsData.data.posts.length
    : 0;

  const totalAuthors = Array.isArray(authors) ? authors.length : 0;

  const totalTags = Array.isArray(tags) ? tags.length : 0;

  const totalPages = Array.isArray(allPostsData.data.pages)
    ? allPostsData.data.pages.length
    : 0;

  const sortedPosts = Array.isArray(allPostsData.data.posts)
    ? [...allPostsData.data.posts].sort((a, b) =>
        a.published_at.localeCompare(b.published_at)
      )
    : [];

  // latest 5 published posts
  const latest5Posts = sortedPosts.slice(-5);

  const postsPerMonthData = [
    { month: "Jan", postCount: 10 },
    { month: "Feb", postCount: 15 },
    { month: "Mar", postCount: 20 },
    { month: "Apr", postCount: 18 },
    { month: "May", postCount: 25 },
    { month: "Jun", postCount: 30 },
    { month: "Jul", postCount: 28 },
    { month: "Aug", postCount: 35 },
    { month: "Sep", postCount: 32 },
    { month: "Oct", postCount: 40 },
    { month: "Nov", postCount: 45 },
    { month: "Dec", postCount: 50 },
  ];

  return (
    <>
      <div className="first-section">
        <div className="post-div">Total Posts: {totalPosts}</div>
        <div className="author-div">Total Authors: {totalAuthors}</div>
        <div className="tag-div">Total Tags: {totalTags}</div>
        <div className="page-div">Total Pages: {totalPages}</div>
      </div>
      <div className="second-section">
        <div className="latest-published">
          <p>Latest 5 Published Posts</p>
          <ul>
            {latest5Posts.map((post) => (
              <li key={post.id}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="posts-graph">
          <p>Posts per Month</p>
          <BarChart width={600} height={400} data={postsPerMonthData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="postCount" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
