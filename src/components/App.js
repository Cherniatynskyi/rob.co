import './App.css';
import {Route, Routes} from 'react-router-dom'
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';


function App() {

  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const BrowsePage = lazy(() => import('../pages/BrowsePage/BrowsePage'));
  const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
  const CartPage = lazy(() => import('../pages/CartPage/CartPage'));


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/browse' element={<BrowsePage/>}/>
        <Route path='/browse/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
