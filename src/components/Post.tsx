import React, { useState, useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from "firebase/firestore";
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";
import { CommentType, PostProps } from "../utils/types";

const Post: React.FC<PostProps> = ({ post, setPosts, type }) => {
  const [user] = useAuthState(auth);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [likes, setLikes] = useState<string[]>(post.likes);
  const [saves, setSaves] = useState<string[]>(post.saves);
  const [newComment, setNewComment] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>(post.comments || []);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [newReply, setNewReply] = useState<string>("");

  const handleLike = useCallback(async () => {
    if (!user) return;

    const postRef = doc(db, "posts", post.id);
    const userId = user.uid;
    const isLiked = likes.includes(userId);

    try {
      setLikes((prevLikes) => {
        if (isLiked) {
          return prevLikes.filter((uid) => uid !== userId);
        } else {
          return [...prevLikes, userId];
        }
      });

      if (isLiked) {
        await updateDoc(postRef, { likes: arrayRemove(userId) });
      } else {
        await updateDoc(postRef, { likes: arrayUnion(userId) });
      }
    } catch (error) {
      setLikes((prevLikes) => {
        if (isLiked) {
          return [...prevLikes, userId];
        } else {
          return prevLikes.filter((uid) => uid !== userId);
        }
      });
    }
  }, [user, post.id, likes]);

  const handleSave = useCallback(async () => {
    if (!user) return;

    const postRef = doc(db, "posts", post.id);
    const userId = user.uid;
    const isSaved = saves.includes(userId);

    const newSaves = isSaved
      ? saves.filter((uid) => uid !== userId)
      : [...saves, userId];

    try {
      setSaves(newSaves);

      if (!isSaved && type === "savedPosts") {
        setPosts((prevPosts) => [...prevPosts, post]);
      }

      if (isSaved) {
        await updateDoc(postRef, { saves: arrayRemove(userId) });
        if (type === "savedPosts") {
          setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
        }
      } else {
        await updateDoc(postRef, { saves: arrayUnion(userId) });
      }
    } catch (error) {
      console.error("Error updating saves:", error);

      setSaves((prevSaves) =>
        isSaved
          ? [...prevSaves, userId]
          : prevSaves.filter((uid) => uid !== userId)
      );
    }
  }, [user, post.id, saves, type]);

  const handleComment = useCallback(async () => {
    if (!user || !newComment.trim()) return;
    const postRef = doc(db, "posts", post.id);

    const comment = {
      id: Date.now().toString(),
      username: user.displayName || "Anonymous",
      text: newComment.trim(),
      replies: [],
    };

    setComments((prevComments) => [comment, ...prevComments]);
    setNewComment("");

    try {
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      });
    } catch (error) {
      setComments((prev) => prev.filter((c) => c.id !== comment.id));
    }
  }, [user, newComment, post.id]);

  const handleReply = useCallback(
    async (commentId: string) => {
      if (!user || !newReply.trim()) return;

      const reply = {
        id: Date.now().toString(),
        username: user.displayName || "Anonymous",
        text: newReply.trim(),
      };

      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), reply],
            };
          }
          return comment;
        })
      );

      setNewReply("");
      setReplyTo(null);

      try {
        const postRef = doc(db, "posts", post.id);

        const updatedComments = post.comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), reply],
            };
          }
          return comment;
        });

        await updateDoc(postRef, { comments: updatedComments });
      } catch (error) {
        console.error("Error updating replies in Firestore:", error);

        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: comment.replies.filter((r) => r.id !== reply.id),
              };
            }
            return comment;
          })
        );
      }
    },
    [user, newReply, post.id, post.comments]
  );

  const handleDelete = useCallback(async () => {
    if (!user || user.uid !== post.userId) return;

    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));

    try {
      await deleteDoc(doc(db, "posts", post.id));
    } catch (error) {
      setPosts((prevPosts) => [...prevPosts, post]);
    }
  }, [user, post, setPosts]);

  return (
    <div className="bg-white rounded-lg shadow-md mb-8 p-4 transition-transform transform hover:scale-105">
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">{post.username}</span>
          {user && user.uid === post.userId && (
            <button onClick={handleDelete} className="text-red-500">
              <TrashIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {user && (
          <div className="flex items-center mb-4">
            <button onClick={handleLike} disabled={!user} className="mr-4">
              {user && likes.includes(user.uid) ? (
                <HeartIconSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartIcon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="mr-4"
            >
              <ChatBubbleLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={handleSave} disabled={!user}>
              {user && saves.includes(user.uid) ? (
                <BookmarkIconSolid className="h-6 w-6 text-blue-500" />
              ) : (
                <BookmarkIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        )}
        <p>{likes.length} likes</p>
        {showComments && (
          <div className="mt-4">
            {comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <p>
                  <span className="font-bold">{comment.username}: </span>
                  {comment.text}
                </p>
                {comment.replies.map((reply) => (
                  <p key={reply.id} className="ml-4 text-sm">
                    <span className="font-bold">{reply.username}: </span>
                    {reply.text}
                  </p>
                ))}
                {user && (
                  <button
                    onClick={() => setReplyTo(comment.id)}
                    className="text-sm text-blue-500"
                  >
                    Reply
                  </button>
                )}
                {replyTo === comment.id && (
                  <div className="flex mt-2">
                    <input
                      type="text"
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      className="flex-grow p-2 border rounded"
                      placeholder="Write a reply..."
                    />
                    <button
                      onClick={() => handleReply(comment.id)}
                      className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            ))}
            {user && (
              <div className="flex mt-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-grow p-2 border rounded"
                  placeholder="Write a comment..."
                />
                <button
                  onClick={handleComment}
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Comment
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
