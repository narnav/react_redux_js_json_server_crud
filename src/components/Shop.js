import React, { useEffect } from 'react'
import { addProd } from '../slicers/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import {getProdsAsync,selectProds,selectupdStatus, selectCats} from '../slicers/shopSlice';
const Shop = () => {
    const products = useSelector(selectProds);
    const updStatus = useSelector(selectupdStatus);
    const categories = useSelector(selectCats);
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
                {products.map((p,i)=><div key={i}> 
                <button onClick={()=>dispatch(addProd({item:p,amount:1}))}>+</button>
                <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button>
                 
                    Desc:{p.desc},Price: {p.price},Cat:  {categories[Number( p.cat)-1 ].cName}
                </div>)}
        </div>
    )
}

export default Shop