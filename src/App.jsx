import React from 'react'
import './App.css';
import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Coin from './Coin.jsx'
import Favorites from './Favorites.jsx'

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coin/:id" element={<Coin />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </>
    );
}

export default App