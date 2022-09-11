import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css'
import RandomRoute from './routes/RandomRoute';
import Homepage from './routes/Homepage';
import ProductCatalog from './routes/ProductCatalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage />} />
          <Route path='amogus' element={<RandomRoute />} />
          <Route path='products' element={<ProductCatalog />} />
        </Route>
        <Route path='/*' element={<p>feeerdy404</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
