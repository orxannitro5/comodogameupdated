import "./home.css";
import React from "react";
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


export default function Home() {
    return (

        <div className="home-main">
            <div className="home-main-content">
                <WatchVideoBlock />
                <AboutUsBlock />
               <div className="home-section-fourth-block">
                    <div className="home-section-fourth-block-top-side">
                        <div className="home-section-fourth-block-top-side-nav">Live streaming</div>
                        <div className="home-section-fourth-block-top-side-nav">Upcoming Challenges</div>
                        <div className="home-section-fourth-block-top-side-nav">Recent Famous Games</div>
                    </div>
                    <div className="home-section-fourth-block-bottom-side">
                        <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                        <div className="home-section-fourth-block-bottom-side-right">
                            <p className="home-section-fourth-block-bottom-side-right-info">ABOUT US <br />________</p>
                            <h2 className="home-section-fourth-block-bottom-side-right-title ">We Believe that
                                Interior beauty Lasts Long</h2>
                            <p className="home-section-fourth-block-bottom-side-right-text">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
                            <button className="home-section-fourth-block-bottom-side-right-button">LEARN MORE</button>
                        </div>
                    </div>
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
                            <img  className="home-section-blog-image" src={LatestBlogPostsFirstImage} alt="" />
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
                                    <div>📅 13th Dec</div>
                                    <div>🤍 15</div>
                                    <div>💬 05</div>
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
                                    <div>📅 13th Dec</div>
                                    <div>🤍 15</div>
                                    <div>💬 05</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <NewsLetter />
            </div>
        </div>
    )
}