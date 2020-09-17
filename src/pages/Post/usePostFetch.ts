import { useState, useReducer, useEffect } from 'react';
import { getPostById, getUserById } from '../../shared/api';
import { Post, User } from '../../shared/types';

export function usePostFetch(id: string) {
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [reloadTrigger, reload] = useReducer(() => ({}), {});
  useEffect(
    () => {
      (async () => {
        setLoading(true);
        setUser(null);
        try {
          const post = await getPostById(id)
          setPost(post);
          const user = await getUserById(post.userId)
          setUser(user);
        } catch (_error) {
          setError(_error);
        } finally {
          setLoading(false);
        }
      })();
    },
    [reloadTrigger, id],
  );

  return { isLoading, post, user, reload, error };
}
