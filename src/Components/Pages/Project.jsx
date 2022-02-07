/* react hooks */
import { useEffect, useContext, useRef, useReducer, useState } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* reducer */
import ProjectReducer from '../Reducer/ProjectReducer';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';

/* gsap animations */
import gsap from 'gsap';

/* react player */
import ReactPlayer from 'react-player';

/* media */
import ArmadoSummit from '../../Assets/Video/Armado.mp4';
import Fiama from '../../Assets/Video/Fiama.mp4';
import Handpoke from '../../Assets/Video/Handpoke.mp4';

/* icons */
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

/* reducer initial */
const initialState = [
    {
        id: 1,
        video: ArmadoSummit,
        category: 'Armado Summit',
        name: 'Armado Summit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
    },
    {
        id: 2,
        video: Fiama,
        category: 'Fiama',
        name: 'Fiama',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
    },
    {
        id: 3,
        video: Handpoke,
        category: 'Handpoke',
        name: 'Handpoke',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoa'
    }
]

const Project = () => {

    /* ref */
    const el = useRef(null);

    /* gsap */
    const child = gsap.utils.selector(el);


    /* state */
    const [active, setActive] = useState(0);

    /* context */
    const entries = useContext(UseObsCont);

    /* reducer */
    const [projects, dispatch] = useReducer(ProjectReducer, initialState);


    /* animation etire section */
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

    /* animation slider */
    useEffect(() => {
        const contentSlider = child("li");
        for (let contentSl of contentSlider) {
            if (contentSl.classList.contains("active")) {
                gsap.to(contentSl, {
                    duration: 1,
                    opacity: 1,
                    x: 0,
                    ease: 'power3.out'
                })
            }
            else{
                gsap.to(contentSl, {
                    duration: 0.5,
                    opacity: 0,
                    x: 100,
                    ease: 'power3.out'
                })
            }
        }

    }, [active]);

    /* functios */
    const nextSlide = () => {
        setActive(active === projects.length - 1 ? 0 : active + 1);
    }
    const prevSlide = () => {
        setActive(active === 0 ? projects.length - 1 : active - 1);
    }

    return (
        <main ref={el} className="project-flex-container" >
            <section className='project-content-container'>
                <ul className="project-content-inner-container">
                    {projects.map((project, index) => (
                        <li key={project.id} className={active === index ? 'active' : ''}>
                            <article className="project-presentation">
                                <h2>{project.name}</h2>
                                <h1>My Recent Project</h1>
                            </article>
                            <div className="project-presentation-divider"></div>
                            <article className="project-excerpt">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard</p>
                            </article>
                        </li>
                    ))}
                </ul>

                <article className='projects-arrows-container'>
                    <button onClick={prevSlide} className='projects-arrows-left'>
                        <FaAngleDoubleLeft className='projects-arrows-left-icon' />
                    </button>
                    <button onClick={nextSlide} className='projects-arrows-right'>
                        <FaAngleDoubleRight className='projects-arrows-right-icon' />
                    </button>
                </article>
            </section>

            {/* Crearte a slider internal in a helper */}
            <section className="project-slider-container">

                <ul className='project-video-inner-container'>

                    {projects.map((project, index) => (
                        <li key={project.id} className={active === index ? 'active' : ''}>
                            <ReactPlayer
                                className="project-slider-left-video"
                                url={project.video}
                                controls
                                playing
                            />

                        </li>
                    ))}

                </ul>







            </section>




        </main >
    );
}

export default Project