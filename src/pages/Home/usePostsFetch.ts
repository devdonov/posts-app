import {useState, useReducer, useEffect} from 'react';
import { getPosts } from '../../shared/api';
import { Post } from '../../shared/types';

export function usePostsFetch() {
  // TODO: implement pagination if needed
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(null);
  const [reloadTrigger, reloadPosts] = useReducer(() => ({}), {});
  useEffect(
    () => {
      (async () => {
        setLoading(true);
        setPosts([]);
        try {
          setPosts(await getPosts());
        } catch (_error) {
          setError(_error)
        } finally {
          setLoading(false);
        }
      })();
    },
    [reloadTrigger],
  );

  return { isLoading, posts, reloadPosts, error };
}
