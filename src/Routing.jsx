import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dogs from './components/Dogs/Dogs';
import Cats from './components/Cats/Cats';
import Birds from './components/Birds/Birds';
import HomePage from './HomePage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/dogs' Component={Dogs} />
                <Route path='/cats' Component={Cats} />
                <Route path='/birds' Component={Birds} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
