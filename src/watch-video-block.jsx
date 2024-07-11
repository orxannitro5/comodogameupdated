import novostroyka from "./assets/home-left.png.webp";
import React from "react";
import "./watch-video-block.scss";
export default function watchVideoBlock() {
    return (
        <div className="home-section-first-block">
            <div className="home-section-first-block-content">
                <div className="home-section-first-block-left-side">
                    <img alt="" className="novostroyka" src={novostroyka} />
                </div>
                <div className="home-section-first-block-right-side">
                    <h2 className="home-section-first-block-right-side-title">For All Occasion
                        HairStyle is a Must
                        Try Fashion</h2>
                    <p className="home-section-first-block-right-side-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                    <div className="watch-video-block">
                        <a href="https://www.youtube.com"><button className="watch-video-block-button"><span className="play-emoji">▶</span></button></a>
                        <p className="watch-video-text">WATCH THE VIDEO</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
