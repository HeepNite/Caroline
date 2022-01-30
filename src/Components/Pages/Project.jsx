/* react hooks */
import { useEffect, useContext, useRef } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';


import ProjectImg from '../../Assets/Img/profile-2.jpeg';

const Project = () => {
    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const entries = useContext(UseObsCont);

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('project')) {
                    fadeIn(gsap, child);


                }
                else {
                    fadeOut(gsap, child);

                }
            }
        });

    }, [entries]);



    return (
        <main ref={el} className="project-flex-container" >
            <section className='project-content-container'>
                <div className="project-grid-container">
                    <article className="project-presentation">
                        <h2>
                            Portfolio
                        </h2>
                        <h1>My Recent Project</h1>
                    </article>
                    <div className="project-presentation-divider"></div>
                    <article className="project-excerpt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard</p>
                    </article>
                </div>
            </section>
            {/* Crearte a slider internal in a helper */}
            <section className="project-slider-container">
                <img src={ProjectImg} alt="project" className="project-slider-left-img" />
            </section>




        </main >
    );
}

export default Project