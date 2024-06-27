import React from "react";
import "./gamepad-block.css";
import star from "./assets/star.png";
import numbertitle from "./assets/quote.png.webp";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Gamepad() {
    const slidesData = [
        {
            username: "Orxan Ahmedov",
            stars: 4,
            firstText: "Azerbaijan,Sumgait  17 hours ago",
            secondText: "Engaging gameplay, endless fun.",
            
        },
        {
            username: "Rufat Kerimov",
            stars: 3,
            firstText: "Azerbaijan,Sumgait  2 weeks ago",
            secondText: "Disappointing, not worth it.",
            
        },
        {
            username: "Shami Bekerova",
            stars: 5,
            firstText: "Azerbaijan,Hovsan 2 minutess ago",
            secondText: "Incredible game, pure joy.",
            
        }
    ];

    const SimpleSlider = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows:false,
        };

        return (
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div className="gamepad-main-block">
                        <div key={index} className="gamepad-block-content">
                            <h1 className="gamepad-block-title-number">
                                <img className="gamepad-block-number-image" src={numbertitle} alt="" />
                            </h1>
                            <p className="gamepad-block-username">{slide.username}</p>
                            <div className="stars">
                                {Array.from({ length: slide.stars }, (_, i) => (
                                    <img key={i} className="star" src={star} alt="" />
                                ))}
                            </div>
                            <p className="gamepad-block-first-text">{slide.firstText}</p>
                            <br />
                            <p className="gamepad-block-second-text">{slide.secondText}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }

    return (
        <div>
            <SimpleSlider />
        </div>
    );
}