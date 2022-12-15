import React, { useEffect } from 'react'
import { addProd } from '../slicers/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import {getProdsAsync,selectProds,selectupdStatus} from '../slicers/shopSlice';
const Shop = () => {
    const products = useSelector(selectProds);
    const updStatus = useSelector(selectupdStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProdsAsync())
    }, [updStatus])
    
    return (
        <div style={{padding:"20px"}}>
           <h1> {updStatus ? 'true':'false'}</h1>
            Shir - Shop
            <br></br>
                {products.length}
                {products.map(p=><div key={p.id}> <button onClick={()=>dispatch(addProd(p))}>BUY</button> - 
                    {p.desc}{p.price}
                </div>)}
        </div>
    )
}

export default Shop