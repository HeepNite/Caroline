/* react hooks */
import { useEffect, useContext, useRef } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

import { gsap } from 'gsap';

/* icons */
import { FaAngleDoubleRight, FaCameraRetro, FaLaptop, FaFilm } from "react-icons/fa";

const Home = () => {
    const ref = useRef(null)
    const entries = useContext(UseObsCont);

    useEffect(() => {
        /* const leftEl = document.querySelector('.home-presentation-left-container');
        const rightEl = document.querySelector('.home-image-right-container');
      */    
     const el = gsap.utils.selector(ref)
        gsap.from(el('.home-grid-left-container'), {
            duration: 1,
            opacity: 0,
            x: -100,
            ease: 'power2.out'

        });
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('home')) {
                    /*  leftEl.classList.remove('fadeOutLeft');
                     rightEl.classList.remove('fadeOutRight');
                     leftEl.classList.add('fadeInLeft');
                     rightEl.classList.add('fadeInRight'); */
                  
                }
                else {
                 /*    leftEl.classList.remove('fadeInLeft');
                    rightEl.classList.remove('fadeInRight');
                    leftEl.classList.add('fadeOutLeft');
                    rightEl.classList.add('fadeOutRight'); */
                }
            }

        });

    }, [entries,]);

    return (
        <main ref={ref} className="home-container">
            <div className="home-flex-container">
                <div className="home-presentation-left-container ">
                    <section className="home-grid-left-container ">
                        <article className="home-vertical-text-1">
                            <h4>Videographer producer</h4>
                            <div className="general-social-divider"></div>
                        </article>
                        <article className="home-presentation">
                            <div className="home-line-presentation home-anim"></div>
                            <h2 className="home-presentation-sub-title home-anim">
                                Hi my name is
                            </h2>
                            <h1 className="home-presentation-title home-anim">
                                Caroline
                            </h1>
                        </article>

                        <article className="home-exceprt home-anim">
                            <p>
                                Founder of Geeknius. Been more than 7 years in this industry. My
                                background is IT education and self-taught
                                web designing skills
                            </p>
                        </article>

                        <article className="home-button">
                            <button className="home-cases-button"><FaAngleDoubleRight /></button>
                            <span>Show Cases</span>
                        </article>

                        <article className="home-vertical-text-2">
                            <h4>Videographer producer</h4>
                        </article>

                        <article className="home-brand-icons">
                            <ul>
                                <li>
                                    <FaCameraRetro />
                                    <span>Photography</span>
                                </li>
                                <li>
                                    <FaLaptop />
                                    <span>Edition </span>
                                </li>
                                <li>
                                    <FaFilm />
                                    <span>Producer</span>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>

                <section className="home-image-right-container ">
                    <article className="img-container">
                    </article>
                </section>
            </div>
        </main>
    );
}

export default Home