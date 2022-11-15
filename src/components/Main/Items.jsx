import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Items = ({producto}) => {
return (
<Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text> 
            ${producto.price}.-
            
            {producto.descuento}%OFF
            
            ${producto.price * producto.descuento/100}.-
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
    </Card.Body>
</Card>
)
}


// <div>
    // <img src={producto.img} // width="200px" // alt={producto.title} />

    // <article className='info'>
        // <h2>{producto.title}</h2>
        // <h4 className='descuento'>{producto.descuento} % OFF</h4>
        // <h3>${producto.price}.-</h3>
        // <h3>${producto.price * producto.descuento/100}.</h3>
        // </article>
    // </div>


export default Items