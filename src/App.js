import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/home' element={<Product></Product>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
