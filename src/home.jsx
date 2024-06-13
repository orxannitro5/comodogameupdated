import "./home.css";
import React, { useState } from "react";
import americanfootballlarge from "./assets/recent_up.png.webp";

import WatchVideoBlock from "./watch-video-block";
import AboutUsBlock from "./about-us-block";
import ScreensGallery from "./screens-gallery";
import GamepadBlock from "./gamepad-block";
import PricingPlans from "./pricing-plans-block";
import FrequentlyAsked from "./frequently-asked-question-block";
import LatestBlogPostsFirstImage from "./assets/blog_img1.png.webp";
import LatestBlogPostsSecondImage from "./assets/blog_img2.png.webp";
import LatestBlogPostsThirdImage from "./assets/blog_img3.png.webp";
import NewsLetter from "./newsletter";
import LiveStreaming from "./liveStreaming";
import RecentGames from "./recentGames";
import UpcomingGames from "./upcomingGames";



export default function Home() {
    const [shownPage, setShownPage] = useState("main")
    const PageEnum = {
        live: "live",
        upcoming: "upcoming",
        recent: "recent",
        main: "main",
        learnMore1: "learnMore1",
        learnMore2: "learnMore2",
        learnMore3: "learnMore3"
    }
    const showLivePage = (event) => {
        setShownPage(PageEnum.live)
        event.target.style.backgroundColor = "white"
        event.target.style.color = "black"
        const recentButton = document.getElementById("recentButton");
        const upcomingButton = document.getElementById("upcomingButton");
        recentButton.style.backgroundColor = "#3d3287";
        recentButton.style.color = "white";
        upcomingButton.style.backgroundColor = "#3d3287";
        upcomingButton.style.color = "white";
    }
    const showUpcomingPage = (event) => {
        setShownPage(PageEnum.upcoming)
        event.target.style.backgroundColor = "white"
        event.target.style.color = "black"
        const liveButton = document.getElementById("liveButton");
        const recentButton = document.getElementById("recentButton");
        liveButton.style.backgroundColor = "#3d3287";
        liveButton.style.color = "white";
        recentButton.style.backgroundColor = "#3d3287";
        recentButton.style.color = "white";
    }
    const showRecentPage = (event) => {
        setShownPage(PageEnum.recent)
        event.target.style.backgroundColor = "white"
        event.target.style.color = "black"
        const liveButton = document.getElementById("liveButton");
        const upcomingButton = document.getElementById("upcomingButton");
        liveButton.style.backgroundColor = "#3d3287";
        liveButton.style.color = "white";
        upcomingButton.style.backgroundColor = "#3d3287";
        upcomingButton.style.color = "white";
    }
    const showLiveSection = () => {
        setShownPage(PageEnum.learnMore1)
    }
    const showUpcomingSection = () => {
        setShownPage(PageEnum.learnMore2)
    }
    const showRecentSection = () => {
        setShownPage(PageEnum.learnMore3)
    }
    const turnBack = ()=>{
        setShownPage(PageEnum.main)
        const liveButton = document.getElementById("liveButton");
        const upcomingButton = document.getElementById("upcomingButton");
        const recentButton = document.getElementById("recentButton");

        liveButton.style.backgroundColor = "#3d3287";
        liveButton.style.color = "white";
        upcomingButton.style.backgroundColor = "#3d3287";
        upcomingButton.style.color = "white";
        recentButton.style.backgroundColor = "#3d3287";
        recentButton.style.color = "white";

    }
    return (
        <div className="home-main">
            {(shownPage === PageEnum.main || shownPage === PageEnum.live || shownPage === PageEnum.upcoming || shownPage === PageEnum.recent) && <div className="home-main-content">
                <WatchVideoBlock />
                <AboutUsBlock />
                <div className="home-section-fourth-block">
                    <div className="home-section-fourth-block-top-side">
                        <input type="button" id="liveButton" value="Live streaming" onClick={showLivePage} className="home-section-fourth-block-top-side-nav" />
                        <input type="button" id="upcomingButton" value="Upcoming Challenges" onClick={showUpcomingPage} className="home-section-fourth-block-top-side-nav" />
                        <input type="button" id="recentButton" value="Recent Famous Games" onClick={showRecentPage} className="home-section-fourth-block-top-side-nav" />
                    </div>
                    {shownPage === PageEnum.live &&
                        <div className="home-section-fourth-block-bottom-side">
                            <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                            <div className="home-section-fourth-block-bottom-side-right">
                                <h2 className="exit-button" onClick={turnBack}>x</h2>
                                <p className="home-section-fourth-block-bottom-side-right-info">Live Streaming <br />________</p>
                                <h2 className="home-section-fourth-block-bottom-side-right-title ">Dive into the Thrilling World of Comodo: Live Streaming Adventures Await!</h2>
                                <p className="home-section-fourth-block-bottom-side-right-text">Welcome to the thrilling world of Comodo, the game that's taking the live streaming community by storm! As players dive into the immersive landscapes of Comodo, they're greeted by vibrant visuals, challenging quests, and intense battles that keep viewers on the edge of their seats.</p>
                                <button className="home-section-fourth-block-bottom-side-right-button" onClick={showLiveSection}>LEARN MORE</button>
                            </div>
                        </div>
                    }
                    {shownPage === PageEnum.upcoming &&
                        <div className="home-section-fourth-block-bottom-side">
                            <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                            <div className="home-section-fourth-block-bottom-side-right">
                            <h2 className="exit-button" onClick={turnBack}>x</h2>

                                <p className="home-section-fourth-block-bottom-side-right-info">Upcoming Challenge <br />________</p>
                                <h2 className="home-section-fourth-block-bottom-side-right-title ">Exciting New Releases from ComodoGame: Get Ready for Epic Adventures!                    </h2>
                                <p className="home-section-fourth-block-bottom-side-right-text">
                                    ComodoGame is set to revolutionize the gaming landscape once again with a slate of exciting new releases that promise to captivate players around the globe. As the anticipation builds, let's take a sneak peek at what's coming up from this innovative game studio.
                                </p>
                                <button className="home-section-fourth-block-bottom-side-right-button" onClick={showUpcomingSection}>LEARN MORE</button>
                            </div>
                        </div>
                    }
                    {shownPage === PageEnum.recent &&
                        <div className="home-section-fourth-block-bottom-side">
                            <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                            <div className="home-section-fourth-block-bottom-side-right">
                            <h2 className="exit-button" onClick={turnBack}>x</h2>

                                <p className="home-section-fourth-block-bottom-side-right-info">Recent Famous Games <br />________</p>
                                <h2 className="home-section-fourth-block-bottom-side-right-title ">Recent Famous Games from ComodoGame: Unforgettable Adventures and Epic Battles</h2>
                                <p className="home-section-fourth-block-bottom-side-right-text">
                                    ComodoGame has recently launched a series of groundbreaking games that have taken the gaming world by storm. These titles have quickly become fan favorites, thanks to their innovative gameplay, stunning graphics, and engaging storylines.
                                </p>
                                <button className="home-section-fourth-block-bottom-side-right-button" onClick={showRecentSection}>LEARN MORE</button>
                            </div>
                        </div>
                    }
                </div>
                <ScreensGallery />
                <GamepadBlock />
                <PricingPlans />
                <FrequentlyAsked />
                <div className="home-section-latest-blog-posts">
                    <div className="home-section-latest-blog-posts-titles">
                        <h1 className="home-section-latest-blog-low-opacity-title">Latest Blog Posts</h1>
                        <h1 className="home-section-latest-blog-high-opacity-title">Latest Blog Posts</h1>
                    </div>
                    <div className="home-section-latest-blog-posts-main-content">
                        <div className="home-section-blog">
                            <img className="home-section-blog-image" src={LatestBlogPostsFirstImage} alt="" />
                            <div className="home-section-blog-content">
                                <h4 className="home-section-blog-content-title">Portable Fashion for women</h4>
                                <p className="home-section-blog-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="home-section-blog-content-info">
                                    <div>📅 13th Dec</div>
                                    <div>🤍 15</div>
                                    <div>💬 05</div>
                                </div>

                            </div>
                        </div>
                        <div className="home-section-blog">
                            <img className="home-section-blog-image" src={LatestBlogPostsSecondImage} alt="" />
                            <div className="home-section-blog-content">
                                <h4 className="home-section-blog-content-title">Portable Fashion for women</h4>
                                <p className="home-section-blog-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="home-section-blog-content-info">
                                    <div>📅 31th Dec</div>
                                    <div>🤍 12</div>
                                    <div>💬 95</div>
                                </div>

                            </div>
                        </div>
                        <div className="home-section-blog home-section-blog-deleted">
                            <img className="home-section-blog-image" src={LatestBlogPostsThirdImage} alt="" />
                            <div className="home-section-blog-content">
                                <h4 className="home-section-blog-content-title">Portable Fashion for women</h4>
                                <p className="home-section-blog-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="home-section-blog-content-info">
                                    <div>📅 13th Jan</div>
                                    <div>🤍 5</div>
                                    <div>💬 08</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <NewsLetter />
            </div>
            }
            {shownPage === PageEnum.learnMore1 && <LiveStreaming />}
            {shownPage === PageEnum.learnMore2 && <UpcomingGames />}
            {shownPage === PageEnum.learnMore3 && <RecentGames />}
        </div>
    )
}