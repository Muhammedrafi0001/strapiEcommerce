import {useEffect} from 'react'

import{BrowserRouter,Route,Routes,useLocation}from 'react-router-dom'
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/confirmation';
import CartMenu from './scenes/global/CartMenu';
import Footer from './scenes/global/Footer';
import Navebar from './scenes/global/Navebar';
import Home from './scenes/home/Home';
import Itemdetails from './scenes/itemDetails/Itemdetails';

const ScrollToTop=()=>{
  const{pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
    return null;  
}





function App() {
  return (
  <div className='app'>
<BrowserRouter>
<Navebar/>
<ScrollToTop/>
<Routes>
  <Route  path='/' element={<Home/>}/>
  <Route  path="item/:itemId" element={<Itemdetails/>}/>
  <Route  path='checkout' element={<Checkout/>}/>
  <Route  path='checkout/success' element={<Confirmation/>}/>
</Routes>
<CartMenu/>
<Footer/>
</BrowserRouter>
</div>
  )
}

export default App;
