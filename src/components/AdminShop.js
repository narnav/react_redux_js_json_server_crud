import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProdsAsync, selectProds, addProdsAsync, delProdAsync, updProdAsync, selectCats, getCatsAsync } from '../slicers/shopSlice';
const AdminShop = () => {
    const categories = useSelector(selectCats);
    const products = useSelector(selectProds);
    const dispatch = useDispatch();
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
    const [cat, setcat] = useState(0)
    useEffect(() => {
        dispatch(getProdsAsync())
        dispatch(getCatsAsync())
    }, [dispatch])
    return (
        <div style={{ backgroundColor: 'pink', padding: "20px" }}>AdminShop
            Desc: <input onChange={(e) => setDesc(e.target.value)} />
            Price: <input onChange={(e) => setPrice(e.target.value)} />
            {categories.length > 0}
            <select onChange={(e) => setcat(e.target.value)}>{categories.map(p => <option key={p.id} value={p.id}>{p.cName}</option>)}</select>
            <button onClick={() => dispatch(addProdsAsync({ desc, price,cat }))}>add new prod</button>
            {products.length}
            {categories.length && products.map(p => <div key={p.id}>
                <button onClick={() => dispatch(delProdAsync(p.id))}>Del</button>-
                <button onClick={() => dispatch(updProdAsync({ desc, price, id: p.id,cat }))}>Upd</button>
                Desc:{p.desc}, Price: {p.price},Cat:  {categories.length>0 && categories[Number( p.cat)-1 ].cName}
            </div>)}



        </div>
    )
}

export default AdminShop