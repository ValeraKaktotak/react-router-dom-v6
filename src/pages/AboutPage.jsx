import { CustomLink } from "components/CustomLink";
import { Outlet } from "react-router-dom";
export const About = () => {
  return (
    <div>
      <h1>About!!!</h1>
      <div style={{ display: "flex", "justify-content": "space-evenly" }}>
        <CustomLink to="team">TEAM</CustomLink>
        <CustomLink to="us">OUR</CustomLink>
        <CustomLink to="you">YOU</CustomLink>
      </div>
      <p>This is a demo website about React-router-dom library.</p>
      <Outlet />
    </div>
  );
};
