import React , {useState} from 'react'
import './App.css';
import Menu from "./components/Menu"
import Header from './components/Header';
import FoodCat from './components/FoodCat';
import Cards from "./components/Cards";
// import Footer from './components/Footer';

const App = () => {
  const [menuData, setMenuData] = useState(Menu)
  return (
    <div className="App">
      <Header/>
      <div className="parent-food">
      <FoodCat menuData={menuData} setMenuData={setMenuData}/>
      </div>
      <Cards menuData={menuData}/>

      {/* <Footer/>  */}
      </div>
      )
}

export default App;
