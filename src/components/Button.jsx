import React from 'react'

export default function Button(props) {
  const {text, updateWorkout} = props

  return (
  <button onClick={updateWorkout} className='px-8 py-4 mx-auto rounded-md border-[2px] border-blue-400 border-solid blueShadow'>
    <p>{text}</p>
  </button>
  )
}
