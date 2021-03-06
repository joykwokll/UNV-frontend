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
import LoginForm from './views/Routes/Profile/LoginForm';
import Home from './views/Routes/Home/Home'
import AntiAging from './views/Routes/Services/AntiAging'
import Pigmentation from './views/Routes/Services/Pigmentation'
import SensitiveSkin from './views/Routes/Services/SensitiveSkin'
import Pimple from './views/Routes/Services/Pimple'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<App />} >
      {/* <Route path="Home" element = {<Home />} > */}
        {/* <Route index element = {<Homepage />} />
        <Route path="Stocks" element = {<Stocks />} />
        <Route path="Stockdata/:StockSymbols" element = {<Stock />} />
        <Route path="*" element = {<p>There's nothing here!</p>} /> */}
       <Route path="Home" element = {<Home />} /> 
       <Route path="About" element = {<About />} /> 
       <Route path="Services" element = {<Services />} />
       <Route path="AntiAging" element = {<AntiAging />} />
       <Route path="Pigmentation" element = {<Pigmentation />} />
       <Route path="SensitiveSkin" element = {<SensitiveSkin />} />
       <Route path="Pimple" element = {<Pimple />} />
       <Route path="BeautyTips" element = {<Tips />} />
       <Route path="Products" element = {<Products />} />
       <Route path="Profile" element = {<Profile />} />
       <Route path="RegisterForm" element = {<RegisterForm />} />
       <Route path="LoginForm" element = {<LoginForm />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();