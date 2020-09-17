import React from 'react'
import { Post } from '../../shared/types'
import PostRow from './PostRow'
import './post-table.style.css'

interface Props {
  data: Post[]
}

function Header() {
  return (
    <thead className="post-table__header fade-up">
      <tr>
        <th>Post ID</th>
        <th>User ID</th>
        <th>Title</th>
      </tr>
    </thead>
  )
}

const PostsTable = ({ data }: Props) => {
  return (
    <table className="post-table">
      <Header />
      <tbody>
        { data.map((row, index) => <PostRow index={index} key={row.id} data={row} />) }
      </tbody>
    </table>
  )
}

export default PostsTable
