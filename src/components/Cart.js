import React, { useEffect } from 'react'
import { selectCart,initCart } from '../slicers/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const myCart = useSelector(selectCart);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(initCart())}, [dispatch])
    
    return (
        <div style={{backgroundColor:'GrayText',padding:"20px"}}>
            Cart
                {myCart.length}
                {myCart.map(p=><div key={p.id}>{p.desc}{p.price}</div>)}
        </div>
    )
}

export default Cart