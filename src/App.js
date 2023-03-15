import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'/>
        <Route path='/cart'/>
      </Routes>
      
      </BrowserRouter>

      e-shop page
    </div>
  );
}

export default App;
