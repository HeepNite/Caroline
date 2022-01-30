/* react hooks */
import { useEffect, useContext, useRef, useReducer } from 'react';

/* context */
import { UseObsCont } from '../Context/UseObsCont';

/* gsap animations */
import gsap from 'gsap';

/* helpers */
import { fadeIn, fadeOut } from '../Helpers/Animatiosn';


import BlogReducer from "../Reducer/BlogReducer";

import blogImg1 from '../../Assets/Img/blog-1.jpeg';

import blogImg2 from '../../Assets/Img/blog-2.jpeg';

import blogImg4 from '../../Assets/Img/blog-4.jpeg';

const initialState = [{
    id: 1,
    image: blogImg1,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    category: 'News',
    title: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!',

},
{
    id: 2,
    image: blogImg2,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    category: 'News',
    title: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!',

},
{
    id: 3,
    image: blogImg4,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    category: 'News',
    title: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!',

}];

const Gallery = () => {

    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const entries = useContext(UseObsCont);

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


    const [posts, dispatch] = useReducer(BlogReducer, initialState)

    return (
        <main ref={el} className="blog-container">
            <section className="blog-grid-container">

                <article className="blog-titles">
                    <h2>News</h2>
                    <h1> Get News Feed</h1>
                    <div className="blog-divider-container"></div>
                </article>

                <article className="blog-drop-menu">
                    <h3>See All</h3>
                </article>

                {
                    posts.map(post => (
                        <article className="blog-feed-article" key={post.id}>
                            <div className="blog-grid-item-img"><img src={post.image} alt="blog" /></div>
                            <div className='blog-post-content'>
                                <h4>{post.month} / {post.year} / {post.category}</h4>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                            </div>
                        </article>
                    ))
                }
            </section>

        </main>
    );
}

export default Gallery;