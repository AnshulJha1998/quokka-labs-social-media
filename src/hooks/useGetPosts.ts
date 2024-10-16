import { useState, useEffect } from "react";
import {
  DocumentData,
  getDocs,
  Query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { PostType } from "../utils/types";

const useGetPosts = (postsQuery: Query) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (lastDoc?: QueryDocumentSnapshot<DocumentData>) => {
    setLoading(true);
    setError(null);

    try {
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

      setPosts(fetchedPosts);
    } catch (err) {
      setError("Failed to fetch posts.");
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [postsQuery]);

  return { posts, loading, error, setPosts, fetchPosts };
};

export default useGetPosts;
