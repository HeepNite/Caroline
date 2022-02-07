
export const fadeIn = (gsap, child) => {
    gsap.to(child(".i-do-left-presentation-container, .i-do-grid-right-container, .client-presentation-container, .client-grid-container, .blog-titles, .blog-drop-menu, .contact-text, .contact-form, .blog-grid-item-img, .blog-post-content, .contact-contact-here, .contact-grid-info "), {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
    });


    gsap.to(child(".home-grid-left-container, .img-container, .project-video-inner-container, .project-content-inner-container, .testimonials-slider-content, .testimonials-slider-img, .testimonials-arrows-container"), {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power3.inOut",
    });

}

export const fadeOut = (gsap, child) => {


    gsap.to(child(".i-do-left-presentation-container, .client-presentation-container, .blog-titles, .blog-drop-menu, .contact-text, .contact-form"), {
        duration: 0.5,
        opacity: 0,
        y: -300,
        ease: "power3.inOut",
    });

    gsap.to(child(".i-do-grid-right-container, .client-grid-container, .blog-grid-item-img, .blog-post-content, .contact-contact-here, .contact-grid-info"), {
        duration: 0.5,
        opacity: 0,
        y: 300,
        ease: "power3.inOut",
    });

    gsap.to(child(".home-grid-left-container, .project-content-inner-container, .testimonials-slider-content, .testimonials-arrows-container"), {
        duration: 0.5,
        opacity: 0,
        x: -300,
        ease: "power3.inOut",
    });
    gsap.to(child(" .img-container, .project-slider-left-img, .testimonials-slider-img, .project-video-inner-container"), {
        duration: 0.5,
        opacity: 0,
        x: 300,
        ease: "power3.inOut",
    });
}




