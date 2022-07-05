import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from '../ItemList/ItemList';
import products  from "../products.json";


const ItemListContainer = ({greeting}) => {
    function onAddCallback(n) {
        alert(`agregados al carrito ${n} productos`);
    }
    //console.log(products);

    
    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
            <ItemList items={products}/>
        </div>
        )
    }

export default ItemListContainer;