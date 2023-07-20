import { useAuth } from "hook/useAuth";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate()

  return (
    <div>
      <h1>Hello {user}!!!</h1>
      <p>Add new post...</p>
      <button onClick={() => signout(() => navigate('/', {replace:true}))}>Log Out</button>
    </div>
  );
};
