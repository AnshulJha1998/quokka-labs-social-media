import { PageType } from "./types";

export const PageTypes: Record<string, PageType> = {
  savedPosts: "savedPosts",
  myPosts: "myPosts",
  feeds: "feeds",
};

export const POSTS_PER_PAGE = 3;
