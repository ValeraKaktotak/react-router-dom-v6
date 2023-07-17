import { Routes, Route } from "react-router-dom";
import { About } from "./pages/Aboutpage";
import { Blog } from "./pages/Blogpage";
import { Home } from "./pages/Homepage";
import { Notfound } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { SinglePage } from "pages/SinglePage";
import { EditPage } from "pages/EditPage";
import { NewPage } from "pages/NewPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route path="posts/new" element={<NewPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
