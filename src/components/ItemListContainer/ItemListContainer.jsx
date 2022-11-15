import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../mock/products';
import ItemList from './ItemList';

const ItemListContainer = ({saludo}) => {
  
  const [items, setItems] = useState([]);

  useEffect(() =>{
    
    getProducts()
      .then((res)=>{
        setItems(res);
      })
      .catch((error)=>{
        console.log('rej', error);
      })
  },[]);
  
  return (
    <div id ="container">
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer