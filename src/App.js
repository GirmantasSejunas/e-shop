import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Shop } from './pages/shop/Shop';
import{ Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/Shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>

    </div>
  );
}

export default App;
