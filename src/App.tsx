import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import AddPost from "./pages/AddPost";
import { Feeds, Login, MyPosts, Register, SavedPosts } from "./pages";
import { AppBar } from "./components";

const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/add-post"
          element={user ? <AddPost /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-posts"
          element={user ? <MyPosts /> : <Navigate to="/login" />}
        />

        <Route
          path="/saved-posts"
          element={user ? <SavedPosts /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
