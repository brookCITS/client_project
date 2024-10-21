//libraries
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, Flip } from 'gsap/all';


gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

const Carousel = ({slides, caption}) => {
    const carouselRef = useRef();

    useGSAP(() => {
        const el = carouselRef.current;

        if (el){
            let carouselItems = el.querySelectorAll('.carousel-item');
            let carouselCaption = el.querySelector('.carousel-caption');

            gsap.set(carouselItems, {
                xPercent: (index) => index * 95,
                scale:(index) => (index === 0? 0.8:0.25),
                borderRadius: '30px',

            });
            
            // Create a GSAP timeline for smooth, linked transitions between slides
            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top top', // Start the animation when the top of the container hits the top of the viewport
                    end: `+=${carouselItems.length * window.innerHeight}`, // End after scrolling through all slides
                    scrub: 0.1, // Make the animation scrub with the scroll
                    pin: true, // Keep the container pinned in place while scrolling
                    anticipatePin: 0.7, // Adjust the pin animation to make it smoother
                    markers: true, // Optional: shows markers for debugging scroll-triggered animations
                },
            })
            .to(carouselItems, {
                xPercent: 0, // Move slide into view
                scale: 1,    // Scale to full size
                borderRadius: 0,
                //ease: 'none', // Keep it linear
                stagger: {
                    amount: 1.5
                },
            }, 0)
            .to(carouselCaption, {
                opacity: 1,
                y: -5, // Move up by 5px
                ease: 'power1.inOut',                
            })

            

            

        }
    }, { scope: carouselRef });

    return (
        <section className='carousel-container' ref={carouselRef}>
            {slides.map((slide, index) => (
                <div key={index} className="carousel-item" style={{ backgroundImage: `url(${slide})` }}>
                </div>
            ))}
            <div className="carousel-caption">
                <h1>{caption.header}</h1>
                <p>{caption.text}</p>
            </div>
        </section>
    );
};

export default Carousel;
