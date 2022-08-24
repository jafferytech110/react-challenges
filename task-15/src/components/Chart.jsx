import React from 'react'
import Bar from './Bar'

const Chart = ({ stats }) => {
    return (
        <>
            {stats.map((stat, index) => {
                return (
                    <Bar key={index} country={stat.country} pop={stat.population} />
                )
            })}
        </>
    )
}

export default Chart