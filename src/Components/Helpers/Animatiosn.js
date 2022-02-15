
export const fadeIn = (gsap, child) => {
    gsap.to(child(".i-do-left-presentation-container, .i-do-grid-right-container, .client-presentation-container, .client-grid-container, .contact-text, .contact-form, .contact-contact-here, .contact-grid-info, .gallery-images-slider-container, .gallery-titles "), {
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


    gsap.to(child(".i-do-left-presentation-container, .client-presentation-container, .contact-text, .contact-form, .gallery-titles"), {
        duration: 0.5,
        opacity: 0,
        y: -300,
        ease: "power3.inOut",
    });

    gsap.to(child(".i-do-grid-right-container, .client-grid-container, .contact-contact-here, .contact-grid-info, .gallery-images-slider-container"), {
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




