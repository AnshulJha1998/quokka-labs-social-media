import React, { useMemo } from "react";
import { collection, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Post from "../components/Post";
import ErrorBoundary from "../utils/ErrorBoundry";
import { PageTypes } from "../utils/constants";
import useGetPosts from "../hooks/useGetPosts";

const SavedPosts: React.FC = () => {
  const [user] = useAuthState(auth);

  const postsQuery = useMemo(() => {
    return query(
      collection(db, "posts"),
      where("saves", "array-contains", user ? user.uid : "")
    );
  }, [user]);

  const { posts, loading, setPosts } = useGetPosts(postsQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <ErrorBoundary
        fallback={<div>Something went wrong. Please try again later.</div>}
      >
        <h2 className="text-2xl font-bold mb-4">Saved Posts</h2>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            setPosts={setPosts}
            type={PageTypes.savedPosts}
          />
        ))}

        {posts.length === 0 && <p>You haven't saved any posts yet.</p>}
      </ErrorBoundary>
    </div>
  );
};

export default SavedPosts;
