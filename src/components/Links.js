import React, { useContext } from "react";
import { allPostsContext } from "../Api/GhostContext";

function Links() {
  const { data } = useContext(allPostsContext);
  const posts = data?.posts || [];
  const allUrls = [];
  posts.forEach((post) => {
    const postHTML = post.html;

    const tempElement = document.createElement("div");
    tempElement.innerHTML = postHTML;

    const anchorElements = tempElement.querySelectorAll("a");

    anchorElements.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href) {
        allUrls.push(href);
      }
    });
  });

  const totalLinks = allUrls.length;

  return (
    <div className="link-container">
      <div className="total-links">
        <p>Total Links in Post: {totalLinks}</p>
      </div>
      <div className="all-links">
        <ul>
          {allUrls.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Links;
