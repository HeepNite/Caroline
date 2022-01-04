import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { project_testimonial, killProcess } from "../Helpers/Animations"

import ProjectImg from '../../Assets/Img/profile-2.jpeg';

const Project = () => {

    const el = useRef();
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline();

    useEffect(() => {
        project_testimonial(child, tl);
        return () => killProcess(tl);
    }, []);


    return (
        <main ref={el} className="project-flex-container">
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




        </main>
    );
}

export default Project