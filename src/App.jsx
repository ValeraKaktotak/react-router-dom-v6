import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { Home } from "./pages/HomePage";
import { Notfound } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";
import { SinglePage } from "pages/SinglePage";
import { EditPage } from "pages/EditPage";
import { NewPost } from "pages/NewPost";
import { LoginPage } from "pages/LoginPage";
import { RequireAuth } from "hoc/RequireAuth";
import { AuthContext } from "hoc/AuthContext";

import "./App.css";

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <NewPost />
              </RequireAuth>
            }
          />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="about/*" element={<About />}>
            <Route path="team" element={<p>OUR TEAM</p>} />
            <Route path="us" element={<p>ABOUT US</p>} />
            <Route path="you" element={<p>ABOUT YOU</p>} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </AuthContext>
  );
}

export default App;
