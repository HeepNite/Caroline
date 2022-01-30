/* react hooks */
import { useEffect, useContext, useRef } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';
/* gsap */
import gsap from 'gsap';

/* icons */
import { FaCameraRetro, FaLaptop, FaFilm, FaBomb } from "react-icons/fa";


const WhatCanIDo = () => {
    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const entries = useContext(UseObsCont);

    useEffect(() => {


        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('whatCanDo')) {

                    fadeIn(gsap, child);

                }
                else {
                    fadeOut(gsap, child);
                }
            }
        });

    }, [entries]);


    return (
        <main ref={el} className="i-do-flex-container">
            <section className="i-do-left-presentation-container">
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

            <section className="i-do-grid-right-container">

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