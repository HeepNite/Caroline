import { useEffect, useRef } from 'react';

import { FaCameraRetro, FaLaptop, FaFilm, FaBomb } from "react-icons/fa";

import { gsap } from 'gsap';
import { whatWeDo_client, killProcess } from '../Helpers/Animations';


const WhatCanIDo = () => {

    const el = useRef();
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline();

    useEffect(() => {
        whatWeDo_client(child, tl);
        return () => killProcess(tl);
    }, []);

    return (
        <main ref={el} className="i-do-flex-container">
            <section className="i-do-presentation-container">
                <article className="i-do-presentation">
                    <h2>Services</h2>
                    <h1>What I can do for you</h1>
                </article>

                <div className="i-do-divider"></div>

                <article className="i-do-excerpt">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </article>

            </section>

            {/* create a slider for experiences and services in a helper */}
            <section className="i-do-grid-left-container">

                <article className="i-do-grid-item">
                    <div className="i-do-icon">
                        <FaCameraRetro />
                    </div>
                    <div className="i-do-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="i-do-grid-item">
                    <div className="i-do-icon">
                        <FaFilm />
                    </div>
                    <div className="i-do-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="i-do-grid-item">
                    <div className="i-do-icon">
                        <FaLaptop />
                    </div>
                    <div className="i-do-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="i-do-grid-item">

                    <div className="i-do-icon">
                        <FaBomb />
                    </div>
                    <div className="i-do-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

            </section>
        </main>
    );
}

export default WhatCanIDo