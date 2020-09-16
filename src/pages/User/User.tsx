import React from 'react'
import { useParams } from 'react-router-dom'

interface Props {
  
}

const User = (props: Props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      User Page {id}
    </div>
  )
}

export default User
