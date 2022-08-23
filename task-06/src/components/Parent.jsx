import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [parentText, setParentText] = useState('Change me from child component')
  return (
    <>
        <div className='parent'>
            <h2>I am Parent</h2>
            <p>{parentText}</p>
        </div>
        <div className='child'>
            <Child setParentText={setParentText} />
        </div>
    </>
  )
}

export default Parent