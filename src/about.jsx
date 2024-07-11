import React from "react";
import "./about.scss";
import AboutUsBlock from "./about-us-block";
import GamepadBlock from "./gamepad-block";
import FrequentlyAsked from "./frequently-asked-question-block";
import NewsLetter from "./newsletter";


export default function About() {
    return (
        <div className="about-block">
            <div className="about-block-content">
                <div className="about-block-after-header">
                    <div className="about-block-after-header-content">
                        <h3 className="about-block-after-header-nav1">Home → About </h3>
                        <h1  className="about-block-after-header-nav">ABOUT US</h1>
                    </div>
                </div>
                <AboutUsBlock />
                <GamepadBlock />
                <FrequentlyAsked />
                <NewsLetter />
            </div>
        </div>
    )
}