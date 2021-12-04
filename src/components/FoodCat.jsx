import React, {useState} from 'react'
import Menu from "./Menu"
const uniqueList= [
    ...new Set(Menu.map((curelm)=>{
    return curelm.category
}))]
console.log(uniqueList)

const FoodCat = ({ setMenuData}) => {
    const [click, setClick] =useState(false)
    const [menuButton] = useState(uniqueList);
    const filterCat = (category)=>{
        const updatedCat = Menu.filter((curelm)=>{
            return curelm.category===category;
        })
        
        
        // if(updatedCat){
        //     setClick(true)
        // }
        console.log(updatedCat)
        
        setMenuData(updatedCat) ;
    }

    console.log(uniqueList)
    return (
        <div className="food-cat">
            <ui className="cats">
                {
                    menuButton.map((curelm)=>{
                    return (<li className="cat" onClick={()=> filterCat(curelm)}>{curelm}</li>
                    )
                    })
                }
            <li className="cat" onClick={()=> setMenuData(Menu)}>All</li>
            </ui>
            
        </div>
    )
}

export default FoodCat
