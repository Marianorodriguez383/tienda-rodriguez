import React from 'react'
import Cardwidget from '../Cardwidget/Cardwidget';


const NavBar = () => {
return (

<nav className='navbar'>
    <h1>West Sport</h1>
    <ul>
        <li>Nosotros</li>
        <li>Remeras</li>
        <li>Short</li>
        <li>Conjuntos</li>
    </ul>
    <Cardwidget/>
</nav>
)
}

export default NavBar;



