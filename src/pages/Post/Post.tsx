import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { usePostFetch } from './usePostFetch'
import './post.style.css'
import { getAnimDelayStyle } from '../../shared/utils.fn'
import { Loader } from '../../shared/components'

const Post = (props: RouteComponentProps<{ id: string }>) => {
  // TODO: handle error
  const { user, post, isLoading } = usePostFetch(props.match.params.id);
  const loaded = !isLoading;

  return (
    <>
      <Loader loaded={loaded} />
      
      {loaded && <div className="section post">
        <article className="post__content">
          <h1 style={getAnimDelayStyle(1, 150)} className="title title--upper text--center fade-up post__title">
            { post?.title }
          </h1>
          <div style={getAnimDelayStyle(6, 150)} className="fade-in">
            <div>
              <span><b>By:</b> <a href={user?.website}>{ user?.name }</a></span>
            </div>
            <p className="post__text">
              { post?.body }
            </p>
          </div>
        </article>
        <footer className="post__footer">
          <Link to="/">
            Back to Posts
          </Link>
        </footer>
      </div>}
    </>
  )
}

export default Post
