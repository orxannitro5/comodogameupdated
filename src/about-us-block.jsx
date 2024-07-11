import React, {  useState ,useEffect} from "react"
import racer from "./assets/about_img.png.webp";
import "./about-us-block.scss"
import GameList from "./gameList"
const PageEnum = {
    list :"list",
    add:"add",
    edit:"edit"
};
export default function Aboutusblock() {
    
    
    return (
        <div className="home-section-third-block">
            <div className="home-section-third-block-top">
                <div className="home-section-third-block-top-side-left-side">
                    <div className="home-section-third-block-top-side-left-side-content">
                        <p className="home-section-third-block-top-side-left-side-content-info">ABOUT US <br />________</p>
                        <h2 className="home-section-third-block-top-side-left-side-content-title">We Believe that
                            Interior beauty Lasts Long</h2>
                        <p className="home-section-third-block-top-side-left-side-content-text">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
                        <button className="home-section-third-block-top-side-left-side-content-button">LEARN MORE</button>
                    </div>
                </div>
                <div className="home-section-third-block-top-side-right-side">
                    <img className="racer-photo" src={racer} alt="" />
                </div>
            </div>
            <div className="home-section-third-block-title">
                <h1 className="home-section-third-block-low-opacity-title">UPCOMING GAMES</h1>
                <h1 className="home-section-third-block-high-opacity-title">UPCOMING GAMES</h1>
            </div>
            <GameList />
        </div>
    )
}
