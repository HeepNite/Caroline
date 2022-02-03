/* react hooks */
import { useEffect, useContext, useRef, useReducer, useState } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';

/* reducers */
import TestimonialReducer from '../Reducer/TestimonialReducer';

/* images */
import testimonials from '../../Assets/Img/test-1.jpeg';
import testimonials2 from '../../Assets/Img/test-2.jpeg';
import testimonials3 from '../../Assets/Img/test-3.jpeg';

/* icons */
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

/* reducer initial */
const initialState = [{
    id: 1,
    image: testimonials,
    name: 'Mariano Barrionuevo',
    job: ' Software Engineer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
},
{
    id: 2,
    image: testimonials2,
    name: 'Carolina Barrios',
    job: ' Software Engineer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
},
{
    id: 3,
    image: testimonials3,
    name: 'Jose Does',
    job: ' Software Engineer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
}]

const Testimonials = () => {

    /* variables */
    const autoSlides = true;
    let slideIntervale,
        intervalTime = 5000;

    /* ref */
    const el = useRef(null);
    const imageSlide = useRef(null);
    const contentSlide = useRef(null);

    /* state */
    const [active, setActive] = useState(0)

    /* gsap */
    const child = gsap.utils.selector(el);

    /* context */
    const entries = useContext(UseObsCont);

    /* reducer */
    const [testimonials, dispatch] = useReducer(TestimonialReducer, initialState)

    /* animation entire sectio */
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


    /* functions */
    const nextSlide = () => {
        setActive(active === testimonials.length - 1 ? 0 : active + 1);
    }
    const prevSlide = () => {
        setActive(active === 0 ? testimonials.length - 1 : active - 1);
    }
    const autoSlide = () => {
        slideIntervale = setInterval(nextSlide, intervalTime);
    }

    /* animation slider */
    useEffect(() => {
        const contentSlider = child('li')
        for (let contentSl of contentSlider) {
            if (contentSl.classList.contains('active')) {
                gsap.to(contentSl, {
                    duration: 0.7,
                    opacity: 1,
                    x: 0,
                    ease: 'power3.out'
                })
            }
            else {
                gsap.to(contentSl, {
                    duration: 0.5,
                    opacity: 0,
                    x: 100,
                    ease: 'power3.out'
                })
            }
        }
        if (autoSlides) {
            autoSlide();
        }
        return () => {
            clearInterval(slideIntervale);
        }
    }, [active]);

    return (
        <main ref={el} className="testimonials-container">
            <div className='testimonials-content-slider-container'>
                <ul ref={contentSlide} className="testimonials-content-inner">
                    {testimonials.map((testimonial, index) => (
                        <li className={active === index ? "active" : ''} key={testimonial.id}>
                            <div className="testimonials-content-container">
                                <article className="testimonials-slider-content">
                                    <h2>{testimonial.job}</h2>
                                    <h1>{testimonial.name}</h1>
                                    <div className="testimonials-divider"></div>
                                    <p>{testimonial.desc}</p>
                                </article>
                            </div>
                        </li>
                    ))}
                </ul>

                <section className='testimonials-arrows-container'>
                    <button onClick={prevSlide} className='testimonials-arrows-left'>
                        <FaAngleDoubleLeft className='testimonials-arrows-left-icon' />
                    </button>
                    <button onClick={nextSlide} className='testimonials-arrows-right'>
                        <FaAngleDoubleRight className='testimonials-arrows-right-icon' />
                    </button>
                </section>
            </div>

            <div className='testimonials-image'>
                <ul ref={imageSlide} className='testimonials-image-slider-container'>
                    {testimonials.map((testimonial, index) => (
                        <li className={active === index ? 'active' : ''}>
                            <img className='testimonials-slider-img' src={testimonial.image} alt="testimonial" />
                        </li>
                    ))}
                </ul>

            </div>

        </main>
    );
}

export default Testimonials;