import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/home' element={<Product></Product>}></Route>

      </Routes>
    </div>
  );
}

export default App;
