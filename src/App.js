import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
