import { useEffect, useRef } from "react";

import { gsap } from 'gsap';
import { whatWeDo_client, killProcess } from '../Helpers/Animations';

import { FaCameraRetro, FaLaptop, FaFilm, FaBomb } from "react-icons/fa";


const Clients = () => {

    const el = useRef();
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline();

    useEffect(() => {
        whatWeDo_client(child, tl);
        return () => killProcess(tl)
    }, []);

    return (
        <main ref={el} className="client-flex-container">
            <section className="client-presentation-container">
                <article className="client-presentation">
                    <h2>We work together</h2>
                    <h1> amazing experiences</h1>
                </article>
                <div className="client-divider"></div>
                <article className="client-excerpt">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </article>

            </section>

            {/* create a slider for experiences and services in a helper */}
            <section className="client-grid-container">

                <article className="client-grid-item">
                    <div className="client-icon">
                        <FaCameraRetro />
                    </div>
                    <div className="client-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="client-grid-item">
                    <div className="client-icon">
                        <FaFilm />
                    </div>
                    <div className="client-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="client-grid-item">
                    <div className="client-icon">
                        <FaLaptop />
                    </div>
                    <div className="client-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

                <article className="client-grid-item">

                    <div className="client-icon">
                        <FaBomb />
                    </div>
                    <div className="client-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </article>

            </section>
        </main>
    );
}

export default Clients