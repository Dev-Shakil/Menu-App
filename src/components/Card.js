import React from 'react'
// import CardImage from "../images/Maggi.jpg"

const Card = ({menuData}) => {
    return (
    <>
    {menuData.map((menu)=>{
            return(
        <div className="card">
             <div className="card-body">
                 <h3 className="card-no">{menu.id}</h3>
                 <span className="card-subtitle">{menu.category}</span>
                 <h2 className="card-title">{menu.name}</h2>
                 <img src={menu.images} alt="breakfast" className="card-image"/>
                 <div className="card-para">
                 <p className="card-description">{menu.description}</p>
                 </div>
                 <button className="card-button">Order Now</button>
             </div>
         </div>)
        })}
        </>
    )
}

export default Card
