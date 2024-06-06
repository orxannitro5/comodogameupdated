import React from "react"
import racer from "./assets/about_img.png.webp";
import playstation from "./assets/b_map1.png.webp";
import darts from "./assets/b_map2.png.webp";
import playstationimg from "./assets/b_map3.png.webp";
import "./about-us-block.css"
import americanfootball from "./assets/b_map4.png.webp";
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
            <div className="home-section-third-block-last-block">
                <div className="home-section-third-block-images-texts">
                    <div className="home-section-third-block-images-text best-game">Best Ps4 Games</div>
                    <div className="home-section-third-block-images-text world-dart" >World Dart 2019</div>
                    <div className="home-section-third-block-images-text xbox-games">New XBOX GAMES</div>
                    <div className="home-section-third-block-images-text american-football">American Football</div>
                </div>
                <div className="home-section-third-block-images">
                    <div className="home-section-third-block-image"><img src={playstation} alt="" /></div>
                    <div className="home-section-third-block-image"><img src={darts} alt="" /></div>
                    <div className="home-section-third-block-image"><img src={playstationimg} alt="" /></div>
                    <div className="home-section-third-block-image"><img src={americanfootball} alt="" /></div>
                </div>

            </div>
        </div>
    )
}
