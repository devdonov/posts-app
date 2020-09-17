import React from 'react'
import { Loader } from '../../shared/components';
import PostsTable from './PostsTable';
import { usePostsFetch } from './usePostsFetch';

interface Props {}

const Home = (props: Props) => {
  // TODO: handle error
  const {isLoading, posts} = usePostsFetch();
  const loaded = !isLoading;

  return (
    <>
      <Loader loaded={loaded} />

      {loaded && <div className="section">
        <h1 className="title title__main title--upper fade-left">POSTS:</h1>
        <PostsTable data={posts} />
      </div>}
    </>
  )
}

export default Home;
