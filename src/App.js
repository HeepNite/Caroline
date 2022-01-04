import Index from "./Components/Pages/Index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Components/Pages/Home";

import WhatCanIDo from './Components/Pages/WhatCanIDo';
import Project from './Components/Pages/Project';
import Testimonials from './Components/Pages/Testimonials';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Clients from './Components/Pages/Clients';
gsap.registerPlugin(ScrollTrigger);




/* import AppRouter from "./Routes/AppRouter";*/

const App = () => {
    return (
        <>
            <div className="section index-section-dark">
                <Home />
            </div>
            <div className="section index-section-clare">
                <WhatCanIDo />
            </div>

            <div className="section index-section-dark">
                <Project />
            </div>

            <div className="section index-section-clare">
                <Clients />
            </div>

            <div className="section index-section-dark">
                <Testimonials />
            </div>

            <div className="section index-section-clare">
                <Blog />
            </div>

            <div className="section index-section-dark">
                <Contact />
            </div>
        </>

    );
}

export default App;
