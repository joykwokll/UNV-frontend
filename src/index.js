import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './views/Routes/About/About';
import Services from './views/Routes/Services/Services'
import Tips from './views/Routes/Tips/Tips'
import Products from './views/Routes/Products/Products'
import Profile from './views/Routes/Profile/Profile'
import RegisterForm from './views/Routes/Profile/RegisterForm';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App />} >
        {/* <Route index element = {<Homepage />} />
        <Route path="Stocks" element = {<Stocks />} />
        <Route path="Stockdata/:StockSymbols" element = {<Stock />} />
        <Route path="*" element = {<p>There's nothing here!</p>} /> */}
       <Route path="About" element = {<About />} /> 
       <Route path="Services" element = {<Services />} />
       <Route path="BeautyTips" element = {<Tips />} />
       <Route path="Products" element = {<Products />} />
       <Route path="Profile" element = {<Profile />} />
       <Route path="RegisterForm" element = {<RegisterForm />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();