import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
import About from './pages/About/About'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>

          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
