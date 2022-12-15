import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProdsAsync, selectProds, addProdsAsync,delProdAsync,updProdAsync } from '../slicers/shopSlice';
const AdminShop = () => {
    const products = useSelector(selectProds);
    const dispatch = useDispatch();
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    useEffect(() => {
        dispatch(getProdsAsync())
    }, [dispatch])
    return (
        <div style={{ backgroundColor: 'pink', padding: "20px" }}>AdminShop
        Desc: <input  onChange={(e)=>setDesc(e.target.value)}/>
        Price: <input  onChange={(e)=>setPrice(e.target.value)}/>
         <button onClick={() => dispatch(addProdsAsync({desc,price}))}>add new prod</button>
            {products.length}
            {products.map(p => <div key={p.id}> 
            <button onClick={()=>dispatch(delProdAsync(p.id))}>Del</button>-
            <button onClick={()=>dispatch(updProdAsync({desc,price ,id:p.id}))}>Upd</button>
                {p.desc}{p.price}
            </div>)}


        </div>
    )
}

export default AdminShop