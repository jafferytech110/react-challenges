import React from 'react'

const Child = ({setParentText}) => {
  return (
    <>
        <h2>I am child</h2>
        <button onClick={()=>setParentText('I am changed from child component by props drilling')}>let's change the parent element content</button>
    </>
  )
}

export default Child