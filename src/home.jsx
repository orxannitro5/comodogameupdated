import "./home.scss";
import React, { useState, useEffect } from "react";
import americanfootballlarge from "./assets/recent_up.png.webp";
import WatchVideoBlock from "./watch-video-block";
import AboutUsBlock from "./about-us-block";
import ScreensGallery from "./screens-gallery";
import GamepadBlock from "./gamepad-block";
import PricingPlans from "./pricing-plans-block";
import FrequentlyAsked from "./frequently-asked-question-block";
import NewsLetter from "./newsletter";
import LiveStreaming from "./liveStreaming";
import RecentGames from "./recentGames";
import UpcomingGames from "./upcomingGames";
import axios from "axios";



export default function Home() {
    const [shownPage, setShownPage] = useState("main")
    const [blogList, setBlogList] = useState([])
    const [likedIndexes, setLikedIndexes] = useState([]);

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
    const turnBack = () => {
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
    useEffect(() => {
        axios.get(`http://localhost:4000/blogs`)
            .then(response => setBlogList(response.data))
            .catch(error => error)
    }, [])
    const onLikeChangeHnd = (index, blog) => {
        if (likedIndexes.includes(index)) {
            return;
        }

        let newBlogList = [...blogList];
        newBlogList[index].likes = (parseInt(newBlogList[index].likes, 10) + 1).toString();

        axios.put(`http://localhost:4000/blogs/${blog.id}`, { ...blog, likes: newBlogList[index].likes })
            .then(() => {
                setBlogList(newBlogList);
                setLikedIndexes([...likedIndexes, index]);
            })
            .catch(err => {
                console.error('Error updating blog:', err);
            });
    };
    useEffect(() => {
        const textLength = () => {
            let textElements = document.querySelectorAll(".home-section-blog-content-text");
            textElements.forEach((element) => {
                let val = element.textContent.length;
                if (val > 280) {
                    element.textContent = element.textContent.substring(0, 300) + "...";
                }
            });
        };

        textLength();
    }, [blogList]);



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
                                <h2 className="home-section-fourth-block-bottom-side-right-title">Dive into the Thrilling World of Comodo: Live Streaming Adventures Await!</h2>
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
                        {blogList.map((blog, index) => (
                            <div className="home-section-blog" key={blog.id}>
                                <img className="home-section-blog-image" src={blog.imageURL} alt="" />
                                <div className="home-section-blog-content">
                                    <h4 DOMContentLoaded className="home-section-blog-content-title">{blog.title}</h4>
                                    <p className="home-section-blog-content-text">{blog.text}</p>
                                    <div className="home-section-blog-content-info">
                                        <div>📅 {blog.date}</div>
                                        <div><button className="like-btn" onClick={() => onLikeChangeHnd(index, blog)}>🤍</button> {blog.likes}</div>
                                        <div>💬 {blog.commentary}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
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