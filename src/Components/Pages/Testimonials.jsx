/* react hooks */
import { useEffect, useContext, useRef, useReducer } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';


import TestimonialReducer from '../Reducer/TestimonialReducer';
import testimonials from '../../Assets/Img/test-1.jpeg';
import testimonials2 from '../../Assets/Img/test-2.jpeg';
import testimonials3 from '../../Assets/Img/test-3.jpeg';

const initialState = [{
    id: new Date().getTime(),
    image: testimonials,
    name: 'Mariano Barrionuevo',
    job: ' Software Engineer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
},
/* {
    id: new Date().getTime(),
    image: testimonials2,
    name: 'Mariano Barrionuevo',
    job: ' Software Engineer',
    desc: 'I think this is the most wonderfull artist in this area'
},
{
    id: new Date().getTime(),
    image: testimonials3,
    name: 'Mariano Barrionuevo',
    job: ' Software Engineer',
    desc: 'I think this is the most wonderfull artist in this area'
}, */]

const Testimonials = () => {
    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const entries = useContext(UseObsCont);


    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('testimonials')) {
                    fadeIn(gsap, child); 


                }
                else {
                    fadeOut(gsap, child); 

                }
            }
        });

    }, [entries]);


    const [testimonials, dispatch] = useReducer(TestimonialReducer, initialState)
    return (
        <main ref={el} className="testimonials-container">
            {
                testimonials.map(testimonial => (
                    <section className="testimonials-slider" key={testimonial.id}>
                        <div className="testimonials-content-container">
                            <article className="testimonials-slider-content">
                                <h2>{testimonial.job}</h2>
                                <h1>{testimonial.name}</h1>
                                <div className="testimonials-divider"></div>
                                <p>{testimonial.desc}</p>
                            </article>
                        </div>

                        <article className="testimonials-slider-img-container">
                            <img className='testimonials-slider-img' src={testimonial.image} alt="testimonial" />
                            </article>
                    </section>
                ))
            }
        </main>
    );
}

export default Testimonials;