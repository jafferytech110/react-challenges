import React from 'react'

const Bar = ({country,pop}) => {
    const totalpop = 7693165599
    const width = (pop/totalpop) * 100
  return (
    <div>
        <h3>{country}</h3>
        <div className='bar'>
            <div style={{width: `${width}%`}} className='country-bar'></div>
        </div>
        <h3>{pop.toLocaleString('en-US')}</h3>
    </div>
  )
}

export default Bar