import React from 'react'
import Items from '../Main/Items'

const ItemList = ({items}) => {
  return (
    <div>
        {
            items.map((producto)=>{
                return (
                    <Items producto ={producto} key={producto.id}/>
                )
            })
        }
    </div>
  )
}

export default ItemList