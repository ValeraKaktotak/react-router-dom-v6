import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Blog = () => {
  const location = useLocation()
  console.log(location)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <Link to="/posts/new" >Add new post</Link>
      <p>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))}
      </p>
    </div>
  );
};
