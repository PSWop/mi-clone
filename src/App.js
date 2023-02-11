
import './App.css';
import Prenavbar from './components/Prenavbar'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'

function App() {
  return (
    <Router>
      <Prenavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text = "HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>

      <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevice"  element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>
       <Route exact path="/home"  element = {<HotAccessories home = {data.hotAccessories.home} musicCover = {data.hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} musicCover = {data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} musicCover = {data.hotAccessoriesCover.mobileAccessories}/>}/> 

      </Routes>
    </Router>
  );
}

export default App;

// 1.26