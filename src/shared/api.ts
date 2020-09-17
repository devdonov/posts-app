import { Post, User } from "./types";

export const BASE = "https://jsonplaceholder.typicode.com";
// export const POSTS = `${BASE}/posts`;
// export const USERS = `${BASE}/users`;

const customFetch = (url: string) => 
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })

export function getUserById(id: number | string): Promise<User> {
  return customFetch(`${BASE}/users/${id}`);
}

export function getPosts(): Promise<Post[]> {
  return customFetch(`${BASE}/posts`);
}

export function getPostById(id: string): Promise<Post> {
  return customFetch(`${BASE}/posts/${id}`);
}
