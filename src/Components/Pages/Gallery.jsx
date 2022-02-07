/* react hooks */
import { useEffect, useContext, useRef, useReducer, useState } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';

/* reducer */
import GalleryReducer from '../Reducer/GalleryReducer';
/* images */
import img1 from '../../Assets/Img/blog-1.jpeg';
import img2 from '../../Assets/Img/blog-2.jpeg';
import img4 from '../../Assets/Img/blog-4.jpeg';

/* icons */
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const initialState = [{
    id: 1,
    image: img1
},
{
    id: 2,
    image: img2
},
{
    id: 3,
    image: img4
},
{
    id: 4,
    image: img1
},
{
    id: 5,
    image: img2
},
{
    id: 6,
    image: img4
}];

const Gallery = () => {

    /* ref */
    const el = useRef(null);

    /* gsap */
    const child = gsap.utils.selector(el);

    /* context */
    const entries = useContext(UseObsCont);

    /* reducer */
    const [images, dispatch] = useReducer(GalleryReducer, initialState);

    /* state */
    const [active, setActive] = useState(0);

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('gallery')) {
                    fadeIn(gsap, child);


                }
                else {
                    fadeOut(gsap, child);

                }
            }
        });

    }, [entries]);

    return (
        <main ref={el} className="gallery-grid-container">
            <article className="gallery-titles">
                <h2>gallery</h2>
                <h1> More than a picture</h1>
                <div className="gallery-divider-container"></div>
            </article>

            <article className='gallery-images-slider-container'>
                <ul className='gallery-image-slider-container-1'>
                    {images.map((image, index) => (
                        <li key={index} className={active === index ? 'active' : ''}>
                            <article className="gallery-feed-article" key={image.id}>
                                <div className="gallery-grid-item-img"><img src={image.image} alt="gallery" /></div>

                            </article>
                        </li>
                    ))}
                </ul>
                <ul className='gallery-image-slider-container-2'>
                    {images.map((image, index) => (
                        <li key={index} className={active === index ? 'active' : ''}>
                            <article className="gallery-feed-article" key={image.id}>
                                <div className="gallery-grid-item-img"><img src={image.image} alt="gallery" /></div>

                            </article>
                        </li>
                    ))}
                </ul>
            </article>
        </main>
    );
}

export default Gallery;