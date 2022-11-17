import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const Shop = () => {
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <button className='btn btn-primary mx-2' onClick={()=>depositMoney(50)}>+</button>
                Change Balance by $ 50
        <button className='btn btn-primary mx-2' onClick={()=>withdrawMoney(50)}>-</button>
    </div>
  )
}

export default Shop