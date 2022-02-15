/* react hooks */
import { useEffect, useContext, useRef, useState } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';

/* icons */
import { FaChrome, FaEnvelopeOpenText } from 'react-icons/fa';

/* email */
import emailjs from '@emailjs/browser';
const Contact = () => {

    /* states */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    /* ref */
    const el = useRef(null);

    /* gsap select */
    const child = gsap.utils.selector(el);

    /* context */
    const entries = useContext(UseObsCont);

    /* fucntions */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([name, email, message].includes('')) {
            setError(true);

        } else {
            setError(false);
            setSuccess(true);
            gsap.from(child('.success'), {
                duration: 1,
                opacity: 0,
                y: 0,
                ease: 'power3.inOut',
            });
            setTimeout(() => {
                setSuccess(false);
                console.log(child('.success'));
            }, 5000);

            /*  emailjs.sendForm('service_x2oiq4y', 'template_hzoo3ai', e.target, 'user_GoBjxVSCeTlgtlBO2Wn9p').then(res => {
                 console.log(e.target);
                 console.log(res);
             })
                 .catch(err => console.error('Failed to send feedback. Error: ', err));
      */
        }
    }

    /* animations entire page */
    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('contact')) {
                    fadeIn(gsap, child);


                }
                else {
                    fadeOut(gsap, child);

                }
            }
        });

    }, [entries]);

    return (

        <main ref={el} className="contact-container">
            <section className="contact-grid-container">

                <article className="contact-text">
                    <h3>hey hey you! talk with me </h3>
                    <h2>Ready to get started? Let's create something extraordinary!</h2>
                    <p>I am currently looking for a full-time position in the field of web development. If you are interested in working with me, please feel free to contact me!</p>
                </article>


                <article className="contact-form">
                    <form onSubmit={handleSubmit}>
                        {error &&
                            <p className="error">
                                Oops! It seems that you have left a field blank, please check it.
                                All fields must be complete.
                            </p>
                        }
                        {success && <p className="success"> Thank you for your message! I will get back to you as soon as possible!</p>
                        }
                        <div className="contact-grid-form-inputs">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
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