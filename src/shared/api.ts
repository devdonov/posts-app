import { Post, User } from "./types";

const BASE = "https://jsonplaceholder.typicode.com";
// export const POSTS = `${BASE}/posts`;
// export const USERS = `${BASE}/users`;

export function getUserById(id: number | string): Promise<User> {
  return fetch(`${BASE}/users/${id}`)
    .then(r =>
      r.json(),
    );
}

export function getPosts(): Promise<Post[]> {
  return fetch(`${BASE}/posts`)
    .then(r =>
      r.json(),
    );
}

export function getPostById(id: string): Promise<Post> {
  return fetch(`${BASE}/posts/${id}`)
    .then(r =>
      r.json(),
    );
}