import React, { createContext, useEffect, useState } from "react";
//import Axios from "axios";

export const allPostsContext = createContext();

//const apiUrl = process.env.ghost_API_url;

function GhostContext({ children }) {
  let [data, setData] = useState([]);
  //let [fetchError, setFetchError] = useState();

  const fetchData = async () => {
    try {
      await fetch(
        "https://demo.ghost.io/ghost/api/content/posts/?include=tags,authors&key=22444f78447824223cefc48062"
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.posts && data.posts.length > 0) {
            setData(data);
            //console.log(data.posts);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <allPostsContext.Provider value={{ data }}>
      {children}
    </allPostsContext.Provider>
  );
}

export default GhostContext;
