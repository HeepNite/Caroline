export function media(child, tl) {
    tl.from(child("ul,div"), {
        duration: 0.8,
        x: -60,
        opacity: 0,
        ease: "power3.Out",
    }, "+=2.4")
}

export function home(child, tl, gsap) {
    tl.from(child(".home-grid-right-container"), {
        duration: 1,
        x: 120,
        y: -0,
        opacity: 0,
        ease: "power2.inOut",
    })
        .from(child(".img-container"), {
            duration: 1.7,
            scale: 1.18,
            stagger: 0,
            ease: "power2.inOut",   
        }, "-=.98")

        /* Content animation */
        .from(child(".home-anim"), {
            duration: 0.8,
            y: 0.8,
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.2,
        }, "-=.6")
         
        .from(child(".home-button,.home-brand-icons,.home-vertical-text-2,.general-media-icons,.home-vertical-text-1"), {
            duration: 0.8,
            x: -60,
            opacity: 0,
            ease: "power3.Out",
        }, "-=.2")

       
}

export function whatWeDo_client(child, tl) {

    tl.from(child(".i-do-grid-left-container, article"), {
        duration: 1,
        y: -60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.Out",
    }, "-=.5")

}

export function project_testimonial(child, tl) {
    tl.from(child(".project-content-container,.testimonials-slider-content"),
        {
            duration: 1,
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })
        .from(child(".project-slider-container,.testimonials-slider-img"), {
            duration: 1.3,
            y: 80,
            opacity: 0,
            ease: "power3.inOut",
        }, "-=.7")

}

export function blog(child, tl) {

    tl.from(child(".blog-titles"), {
        duration: 1,
        y: 45,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.Out",
    })
        .from(child(".blog-drop-menu,.blog-feed-article"), {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.4,
            ease: "power3.Out",
        }, "-=.5")

}

export function contact(child, tl) {
    tl.from(child(".contact-text h3,.contact-text h2,.contact-text p,.contact-contact-here div"), {
        duration: .6,
        y: 60,
        opacity: 0,
        stagger: 0.18,
        ease: "power3.Out",
    })
        .from(child("form,.contact-grid-info"), {
            duration: .7,
            y: 60,
            stagger: .5,
            opacity: 0,
        }, "-=.2")
}
export const killProcess = (tl) => {
    tl.kill(true)
}
