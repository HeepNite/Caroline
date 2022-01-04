import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Proyect from '../Components/Pages/Project';
import Blog from '../Components/Pages/Blog';
import WhatCanIDo from '../Components/Pages/WhatCanIDo';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/what-can-i-do" element={<WhatCanIDo />} />
                <Route path="/project" element={<Proyect />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;