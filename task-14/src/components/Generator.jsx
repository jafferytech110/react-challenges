import React from 'react'
import Box from './Box'

const Generator = () => {
    const generatorNumbers = []
    for(let i = 0; i < 32; i++) {
        generatorNumbers.push(i)
    }
  return (
    <div className='generator'>
        {generatorNumbers.map(number => {
            return (
                <Box number={number}/>
            )
        })}
    </div>
  )
}

export default Generator