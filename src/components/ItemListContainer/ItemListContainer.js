import React, {  useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from '../ItemList/ItemList';
import products  from "../products.json";


const ItemListContainer = ({greeting}) => {
    function onAddCallback(n) {
        alert(`agregados al carrito ${n} productos`);
    }
    //console.log(products);
    
    const [loading, setProducts] = useState(true);

    const task = new Promise((resolve, reject) =>{
        let prePromise = true;
        setTimeout(()=>{
            if (prePromise){
                resolve(products);
            }else{
                reject('no hay datos')
            }
        }, 2000)
    })

    useEffect(()=>{
        task
        .then((products)=>{
            setProducts(products)
        })
        .cach((err)=>{
            console.log(err);
        })
    })
    //useEffect(() => {
    //    setTimeout(setLoading, 2000, false);
    //    console.log('useEffect');
    //}, []);
    
    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
            {loading ? (<h3>CARGANDO</h3>):(<ItemList items={products}/>)}       
        </div>
        )
    }

export default ItemListContainer;//