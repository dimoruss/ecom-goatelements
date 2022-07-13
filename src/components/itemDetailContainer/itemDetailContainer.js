import React, { useEffect, useState} from "react";
import getItem from "../itemDetail/itemDetail";
import ItemList from "../ItemList/ItemList";


const ItemDetailContainer = ({greeting}) => {
    const [produ, setProdu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getItem.then((data)=>{setProdu(data)})
        .catch((err)=>console.log(err))
        .finally(()=>{setLoading(false)})
    }, [])

    return(
        <div>
            <h1>{greeting}</h1>
            {loading ? <h3>CARGANDO</h3> : <ItemList getItem = {produ} />}
        </div>
    )
} 

export default ItemDetailContainer;