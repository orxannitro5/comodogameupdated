import React, { useEffect, useState } from "react";
import "./gamepad-block.css";
import star from "./assets/star.png";
import numbertitle from "./assets/quote.png.webp";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
export default function Gamepad() {
    
    const [gamepadList,setGamepadList] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/users`)
        .then(response=>{
            setGamepadList(response.data)
        })
        .catch(error=> error)
    },[])
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
                {gamepadList.map((slide, index) => (
                    <div className="gamepad-main-block">
                        <div  key={index}  className="gamepad-block-content">
                            <h1 className="gamepad-block-title-number">
                                <img className="gamepad-block-number-image" src={numbertitle} alt="" />
                            </h1>
                            <p className="gamepad-block-username">{slide.user}</p>
                            <div className="stars">
                                {Array.from({ length: slide.stars }, (_, i) => (
                                    <img key={i} className="star" src={star} alt="" />
                                ))}
                            </div>
                            <p className="gamepad-block-first-text">{slide.location}</p>
                            <br />
                            <p className="gamepad-block-second-text">{slide.comment}</p>
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