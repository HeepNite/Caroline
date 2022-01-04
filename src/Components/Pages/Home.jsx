/* react hooks */
import { useEffect, useRef } from 'react';

/* animations Gsap*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { home, killProcess } from '../Helpers/Animations';

/* icons */
import { FaAngleDoubleRight, FaCameraRetro, FaLaptop, FaFilm } from "react-icons/fa";

const Home = () => {
    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline()

    useEffect(() => {
        home(child, tl);
        return () => killProcess(tl);


    }, []);

    return (
        <main ref={el} className="home-container">
            <div className="home-flex-container">
                <div className="home-presentation-container">
                    <section className="home-grid-left-container">
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

                <section className="home-grid-right-container">
                    <article className="img-container">
                    </article>
                </section>
            </div>
        </main>
    );
}

export default Home