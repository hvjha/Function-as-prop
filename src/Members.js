import React from 'react'

export default function Members(props) {
  return (
    <div>
      <h1>Members Component</h1>
      <button onClick={()=>props.data()}>Call Data Function</button>
    </div>
  )
}
