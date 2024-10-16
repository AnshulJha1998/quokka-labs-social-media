export type PostType = {
  id: string;
  imageUrl: string;
  username: string;
  likes: string[];
  comments: CommentType[];
  saves: string[];
  userId: string;
  createdAt: Date;
};

export type PageType = "savedPosts" | "myPosts" | "feeds";

export type CommentType = {
  id: string;
  username: string;
  text: string;
  replies: ReplyType[];
};

export type ReplyType = { id: string; username: string; text: string };

export type PostProps = {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  type: PageType;
};
