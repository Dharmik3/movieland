import React from "react";
import './App.css'
import Header from "./components/Header";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Modal from './components/Modal'
import Footer from "./components/Footer";
const App = () => {

    return (
        <div className="app">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Movies/>} />
                    <Route  path='/:id' element={<Modal/>} />
                    
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App