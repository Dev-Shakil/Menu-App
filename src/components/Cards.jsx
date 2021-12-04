import React from 'react'

import Card from './Card'
// 
const Cards = ({menuData}) => {
    
    return (
        <div className="card-container">
        <Card menuData={menuData}/>
       </div>   
    )
}

export default Cards
