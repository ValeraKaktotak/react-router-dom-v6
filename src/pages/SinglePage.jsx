import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SinglePage = () => {
  const { id } = useParams();
  const [post, setPosts] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
        <h1>
            {post? post.title: ''}
        </h1>
        <p>
            {post?post.body:''}
        </p>
        <Link to={`/posts/${id}/edit`} >Edit post</Link>
    </div>
  );
};
