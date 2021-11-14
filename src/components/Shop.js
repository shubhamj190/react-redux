import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'
import {bindActionCreators} from 'redux'
function Shop() {

    const dispatch = useDispatch()
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <button className="btn btn-primary"onClick={()=>{withdrawMoney(100)}}>-</button>
            add to cart
            <button className="btn btn-primary"onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
