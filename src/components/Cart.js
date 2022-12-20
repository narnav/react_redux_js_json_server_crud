import React, { useEffect, useState } from 'react'
import { selectCart,initCart,selectupdCartFlag ,addProd} from '../slicers/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import {selectCats} from '../slicers/shopSlice';
const Cart = () => {
    const myCart = useSelector(selectCart);
    const myCartUpd = useSelector(selectupdCartFlag);
    const [total, settotal] = useState(0)
    const categories = useSelector(selectCats);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(initCart())}, [dispatch])
    useEffect(() => {
        let tempTotal=0
        myCart.forEach(item => (tempTotal+= (item.amount * item.price))   ); 
        settotal(tempTotal)
        console.log(categories)
    }, [myCartUpd])
    
    return (
        <div style={{backgroundColor:'GrayText',padding:"20px"}}>
            Cart
                {myCart.length}
                {myCart.map((p,i)=><div key={i}>
                <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button>
                    {p.desc}{p.price} Amount:{p.amount},Cat: {categories[Number( p.cat)-1 ].cName} 
                <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button>
                </div>)}
                Total: {total}
        </div>
    )
}

export default Cart