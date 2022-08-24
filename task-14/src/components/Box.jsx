import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Box = ({number}) => {
    const [even, setEven] = useState(false)
    const [prime, setPrime] = useState(false)

    const checkEven = (num) => {
        if (num % 2 === 0) {
            setEven(true)
        } else {
            setEven(false)
        }
    }

    const checkPrime = (num) => {
        if(num < 2) {
            setPrime(false)
            return 
        }
        if(num === 2) {
            setPrime(true)
            return
        }
        for (let i = 2; i < num; i++){
            if(num % i === 0) {
                setPrime(false)
                return
            } else {
                setPrime(true)
            }
        }
    }

    useEffect(()=>{
        checkPrime(number)
        checkEven(number)
    },[number])

  return (
    <div className={prime ? 'red-box' : (even ? 'green-box' : 'yellow-box')}>
        {number}
    </div>
  )
}

export default Box