import React from 'react'
import './loader.style.css'

interface Props {
  loaded?: boolean
}

// const ANIM_CLASSES = {
//   true: "loader--slide-80",
//   false: "loader--slide-100"
// }

const Loader = ({ loaded = false }: Props) => {
  const animationClass = loaded ? "loader--slide-100" : "loader--slide-80";
  return (
    <div className={`loader ${animationClass}`} />
  )
}

export default Loader
