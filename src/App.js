import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Blog } from "./pages/Blogpage";
import { Home } from "./pages/Homepage";
import { Notfound } from "./pages/Notfoundpage";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
