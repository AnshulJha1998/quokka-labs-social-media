import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const AppBar: React.FC = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Quokka Social
        </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <span className="mr-4 font-bold text-red-500">
                {user.displayName}
              </span>
              <Link
                to="/my-posts"
                className={`text-white mr-4 ${
                  location.pathname === "/my-posts"
                    ? "font-bold text-green-400"
                    : ""
                }`}
              >
                My Posts
              </Link>
              <Link
                to="/saved-posts"
                className={`text-white mr-4 ${
                  location.pathname === "/saved-posts"
                    ? "font-bold text-green-400"
                    : ""
                }`}
              >
                Saved Posts
              </Link>
              <Link
                to="/add-post"
                className={`text-white mr-4 ${
                  location.pathname === "/add-post"
                    ? "font-bold text-green-400"
                    : ""
                }`}
              >
                Add Post
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
