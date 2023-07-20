import { SearchPosts } from "components/SearchPosts";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParam = searchParams.get("post") || "";
  const latestParam = searchParams.has("latest");
  const newPosts = latestParam ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <SearchPosts
        setSearchParams={setSearchParams}
        searchParam={searchParam}
        latestParam={latestParam}
      />
      <Link to="/posts/new">Add new post</Link>
      <p>
        {posts
          .filter(
            (post) => post.title.includes(searchParam) && post.id >= newPosts
          )
          .map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
          ))}
      </p>
    </div>
  );
};
