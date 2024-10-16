import React, { useState, useCallback, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { PostType } from "../utils/types";

const AddPost: React.FC = React.memo(() => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user] = useAuthState(auth);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImageFile(e.target.files[0]);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!user) {
        setError("You must be logged in to add a post.");
        return;
      }

      if (!imageFile) {
        setError("Please provide an image file.");
        return;
      }

      setLoading(true);
      setError(null);

      const storage = getStorage();
      const storageRef = ref(storage, `posts/${imageFile.name}`);

      try {
        await uploadBytes(storageRef, imageFile);
        const imageUrl = await getDownloadURL(storageRef);
        const newPostData: PostType = {
          id: "",
          imageUrl,
          username: user.displayName || "Anonymous",
          likes: [],
          comments: [],
          saves: [],
          userId: user.uid,
          createdAt: new Date(),
        };

        await addDoc(collection(db, "posts"), newPostData);
        setImageFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setError(null);
      } catch (err) {
        setError("Failed to add post. Please try again later.");
        console.error("Error adding post:", err);
      } finally {
        setLoading(false);
      }
    },
    [user, imageFile]
  );

  return (
    <div className="container mx-auto mt-8 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Image Upload</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
            ref={fileInputRef}
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Post"}
        </button>
      </form>
    </div>
  );
});

export default AddPost;
