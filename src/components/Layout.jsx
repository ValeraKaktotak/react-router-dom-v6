import { Link, Outlet, NavLink } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const setActive = ({ isActive }) => (isActive ? "my-active-link" : "");

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <CustomLink to="/blog" className={setActive}>
          Blog
        </CustomLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "my-active-link" : "")}>
          About
        </NavLink>
      </header>
      <div className="App">
        <Outlet />
      </div>
      <footer>Footer2023</footer>
    </>
  );
};
