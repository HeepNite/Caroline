/* react hooks */
import { useEffect, useContext } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* icons */
import { FaCameraRetro, FaLaptop, FaFilm, FaBomb } from "react-icons/fa";


const WhatCanIDo = () => {

    const entries = useContext(UseObsCont);

    useEffect(() => {
        const leftEl = document.querySelector('.i-do-left-presentation-container');
        const rightEl = document.querySelector('.i-do-grid-right-container');

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('whatCanDo')) {
                    leftEl.classList.add('fadeInLeft');
                    rightEl.classList.add('fadeInLeft');
                }
                else {
                    leftEl.classList.remove('fadeInLeft');
                    rightEl.classList.remove('fadeInLeft');
                }
            }

        });

    }, [entries]);


    return (
        <main className="i-do-flex-container">
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

            {/* create a slider for experiences and services in a helper */}
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