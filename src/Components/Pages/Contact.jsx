import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contact, killProcess } from '../Helpers/Animations';

import { FaChrome, FaEnvelopeOpenText } from 'react-icons/fa';

const Contact = () => {

    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
       contact(child, tl);
        return () => killProcess(tl);
       
    },[]);
    return (

        <main ref={el} className="contact-container">
            <section className="contact-grid-container">

                <article className="contact-text">
                    <h3>hey hey you! talk with me </h3>
                    <h2>Ready to get started? Let's create something extraordinary!</h2>
                    <p>I am currently looking for a full-time position in the field of web development. If you are interested in working with me, please feel free to contact me!</p>
                </article>


                <article className="contact-form">
                    <form>
                        <div className="contact-grid-form-inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" />
                            <button type="submit">Say hello</button>
                        </div>
                    </form>
                </article>

                <article className="contact-contact-here">

                    <div className="contact-flex-contact-container">
                        <div className="contact-flex-icon">
                            <FaChrome />
                        </div>
                        <div className="contact-flex-info">
                            <h4>Get me here</h4>
                            <p>linkedin.com/in/joseph-m-sanchez</p>
                        </div>
                    </div>

                    <div className="contact-flex-contact-container">
                        <div className="contact-flex-icon">
                            <FaEnvelopeOpenText />
                        </div>
                        <div className="contact-flex-info">
                            <h4>Email me</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>

                </article>

                <article className="contact-grid-info">
                    <h3>YOU KNOW TO FIND US</h3>
                    <h2>let's talk</h2>
                </article>

            </section>
        </main>
    );
}

export default Contact