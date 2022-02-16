/* core */
import { useRef, useEffect } from 'react';
/* gsap */
import { gsap } from 'gsap';
/* external library */
import ReactPlayer from 'react-player';

/* video presentation */
import production from '../../../Assets/Video/production.mp4';

const Loading = ({ setIsLoading }) => {

    /* references */
    const ref = useRef(null);
    const child = gsap.utils.selector(ref);

    /* animations */
    useEffect(() => {
        gsap.timeline().from(child('.loading-content'), {
            duration: 1.9,
            opacity: 0,
            y: -150,
            stagger: 0.4,
            ease: 'power3.inOut'
        })
        gsap.timeline().from(child('button'), {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: 'power3.in'
        }, '+=0.6')

    }, []);

    /* functions */
    const handleLoad = (e) => {
        e.preventDefault();
        gsap.timeline().to(child('.loading-content'), {
            duration: 0.7,
            opacity: 0,
            y: -150,
            stagger: 0.4,
            ease: 'power3.inOut'
        })
        gsap.timeline().to(child('button'), {
            duration: 0.7,
            opacity: 0,
            y: 100,
            ease: 'power3.inOut'
        })
        gsap.timeline().to(ref.current, {
            duration: 1.6,
            opacity: 1,
            display: "none",
            x: -1600,
            ease: "power3.inOut"
        }, '+=1.2')
    }
    return (
        <main ref={ref} className="loading-container">
            <ReactPlayer
                className="loading-video"
                url={production}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
            />
            <section className="loading-container-inner">
                <h1 className='loading-content'>this is Caroline</h1>
                <h2 className='loading-content'>Filmaker</h2>
                <button onClick={handleLoad}> Know me</button>
            </section>
        </main>
    );
}

export default Loading;