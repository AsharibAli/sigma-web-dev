import React from "react";
import { useState, useEffect } from "react";
import "./App.css"

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
      setPosts(data)
    })
  }, [])
  return (
    <div className="posts-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts