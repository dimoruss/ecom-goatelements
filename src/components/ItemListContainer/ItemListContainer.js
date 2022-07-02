import React from 'react';
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return <div className="container-list">{greeting}<ItemCount stock={5} initial={1} onAdd={()=> alert('agregados al carrito ${n} productos')}/></div>
    }

export default ItemListContainer;