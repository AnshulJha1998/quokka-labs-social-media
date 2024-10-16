import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import Post from "../components/Post";
import { PostType } from "../utils/types";
import ErrorBoundary from "../utils/ErrorBoundry";
import { PageTypes, POSTS_PER_PAGE } from "../utils/constants";

const Feeds: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchPosts = useCallback(
    async (lastDoc?: QueryDocumentSnapshot<DocumentData>) => {
      try {
        setLoading(true);
        setError(null);
        const postsQuery = query(
          collection(db, "posts"),
          orderBy("createdAt", "desc"),
          lastDoc ? startAfter(lastDoc) : limit(POSTS_PER_PAGE)
        );
        const snapshot = await getDocs(postsQuery);
        const fetchedPosts = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            imageUrl: data.imageUrl,
            username: data.username,
            likes: data.likes,
            comments: data.comments,
            saves: data.saves,
            userId: data.userId,
            createdAt: data.createdAt.toDate(),
          } as PostType;
        });

        setPosts((prevPosts) =>
          lastDoc ? [...prevPosts, ...fetchedPosts] : fetchedPosts
        );
        setLastVisible(snapshot.docs[snapshot.docs.length - 1] || null);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && lastVisible) {
          fetchPosts(lastVisible);
        }
      },
      { threshold: 0.5 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loading, lastVisible, fetchPosts]);

  if (error) {
    return <div className="text-red-500 text-center my-4">{error}</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="sr-only text-black">Feed</h1>
      <ErrorBoundary
        fallback={<div>Something went wrong. Please try again later.</div>}
      >
        {posts.length
          ? posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                setPosts={setPosts}
                type={PageTypes.feed}
              />
            ))
          : !loading && (
              <div className="text-center font-bold ">
                No posts are available
              </div>
            )}
      </ErrorBoundary>
      {loading && (
        <div className="flex justify-center items-center my-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {!loading && lastVisible && (
        <div ref={observerTarget} className="h-10 my-4" aria-hidden="true" />
      )}
    </div>
  );
};

export default Feeds;
