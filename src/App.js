/* Core */
import { useEffect, useRef } from 'react';

/* Hooks */
import useObserver from "./Components/Hooks/useObserver";

/* Context */
import { UseObsCont } from './Components/Context/UseObsCont';

/* Routers 
mport AppRouter from "./Routes/AppRouter";*/

/* Page Components */
import Home from './Components/Pages/Home';
import WhatCanIDo from './Components/Pages/WhatCanIDo';
import Project from './Components/Pages/Project';
import Testimonials from './Components/Pages/Testimonials';
import Gallery from './Components/Pages/Gallery';
import Contact from './Components/Pages/Contact';
import Clients from './Components/Pages/Clients';


const App = () => {

    /* Variables */
    const options = {
        root: null,
        rootMargin: "1000px 1000px",
        threshold: .2
    }
    /* Hooks */
    const [, setElements, entries] = useObserver(options);

    /* Referencies */
    const ref = useRef(null);

    /* gsap */
   
    /* Interction observer API */
    useEffect(() => {

        let panels = ref.current.children;
        setElements(panels);

    }, [setElements]);

    return (
        <UseObsCont.Provider value={entries}>
            <main ref={ref} className="container">
                <section className=" panel home index-section-dark">
                    <Home />
                </section>
                <section className=" panel whatCanDo index-section-clare">
                    <WhatCanIDo />
                </section>
                <section className=" panel project index-section-dark">
                    <Project />
                </section>
                <section className=" panel clients index-section-clare">
                    <Clients />
                </section>
                <section className=" panel testimonials index-section-dark">
                    <Testimonials />
                </section>
                <section className=" panel gallery  index-section-clare">
                    <Gallery />
                </section>
                <section className=" panel contact index-section-dark">
                    <Contact />
                </section>
            </main>
        </UseObsCont.Provider>
    );

}

export default App;
