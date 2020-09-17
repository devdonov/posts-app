import React from 'react'
import { useHistory } from 'react-router-dom'
import { Post } from '../../shared/types';
import { getAnimDelayStyle } from '../../shared/utils.fn';

interface Props {
  data: Post,
  index: number
}

const PostRow = ({ data, index }: Props) => {
  const history = useHistory();
  
  return (  
    <tr
      className="post-table__row fade-up"
      style={getAnimDelayStyle(index, 10)}
      onClick={() => history.push(`/${data.id}`)}
    >
      <td>{ data.id }</td>
      <td>{ data.userId }</td>
      <td>{ data.title }</td>
    </tr>
  )
}

export default PostRow
