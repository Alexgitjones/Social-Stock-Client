import React from 'react';
import Slider from "react-slick";

export default function Home_test_slider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Data for each slide
    const sliderData = [
        {
            name: "Shawmell Johnson",
            time: "4 months ago",
            rating: [1, 1, 1, 1, 1], // You can adjust the rating here
            description: "I got over 700k views on a reel using your videos with less than 600 followers & gained 3000 new followers from just that one reel. Can't thank you enough for your videos! I'm obsessed with social stocks 🥰."
        },
        {
            name: "Jane parker",
            time: "7 months ago",
            rating: [1, 1, 1, 1, 1],
            description: "I RAN to download these!! I literally signed up last week & already downloaded sooo much!! Everything you have fits my aesthetic & brand to a T & im so happy i found you 🥹 my content is going to be AMAZING now thanks to you."
        },
        {
            name: "Bob Johnson ",
            time: "9 months ago",
            rating: [1, 1, 1, 1, 1],
            description: "I added my filter to your stock video and it looks amazing! 😍 Thank you for creating this service. It's truly saving my marketing. I'm able to post even when my auto immune disease is flaring up 🙌."
        },
        {
            name: "Alice Smith",
            time: "6 months ago",
            rating: [1, 1, 1, 1, 1],
            description: "Seriously love your stock videos! As a busy mama and business owner (who also launched a course this month 🤯) I don't have time to get b-roll, bts content myself - your platform is a life (content) saver 🙌"
        },
        {
            name: "Jane Doe",
            time: "1 months ago",
            rating: [1, 1, 1, 1, 1],
            description: "Thank you sm for always creating new content and listening to your audienceI appreciate 🤍🫶 you guys so much"
        }
    ];

    return (
        <div className='container'>
            <Slider {...settings}>
                {sliderData.map((slide, index) => (
                    <div key={index} className="t-box">
                        <div className="p-details">
                            <img className="p-img" src="/assets/images/home/sh-img.png" alt={slide.name} />
                            <div className="pd-box text-start">
                                <h1 className="p-name">{slide.name}</h1>
                                <h6 className="t-time">{slide.time}</h6>
                            </div>
                        </div>
                        <div className="r-stars text-start">
                            {slide.rating.map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                                    viewBox="0 0 21 20" fill="none">
                                    <path
                                        d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                                        fill="#FF9245" />
                                </svg>
                            ))}
                        </div>
                        <p className="decs text-start">{slide.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
