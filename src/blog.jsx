import React from "react";
import "./blog.scss";
import WatchVideoBlock from "./watch-video-block";
import sociallife from "./assets/cat-post-3.jpg.webp"
import politics from "./assets/cat-post-2.jpg.webp";
import food from "./assets/cat-post-1.jpg.webp";
import coffee from "./assets/m-blog-1.jpg.webp";
import author from "./assets/author.png.webp"
import instagram from "./assets/instagramblog.svg";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin-in.svg"
import github from "./assets/github.svg";
import post1 from "./assets/post1.jpg.webp";
import post2 from "./assets/post2.jpg.webp";
import post3 from "./assets/post3.jpg.webp";
import post4 from "./assets/post4.jpg.webp";
import forest from "./assets/m-blog-2.jpg.webp";
import wedding from "./assets/m-blog-3.jpg.webp";
import city from "./assets/m-blog-5.jpg.webp";
import { NavLink } from "react-router-dom";




export default function Blog() {
    return (
        <div className="blog-section">
            <WatchVideoBlock />
            <div className="blog-section-content">
                <div className="blog-section-last-part-block">
                    <div className="blog-section-last-part-top-block">
                        <div className="blog-section-last-part-top-block-colomns">
                            <img className="blog-section-colomn" src={sociallife} alt="" />
                            <div className="blog-section-colomn-desc">
                                <h5 className="blog-section-colomn-title">SOCIAL LIFE</h5>
                                <p className="blog-section-colomn-text">Enjoy your social life together</p>
                            </div>
                        </div>
                        <div className="blog-section-last-part-top-block-colomns">
                            <img className="blog-section-colomn" src={politics} alt="" />
                            <div className="blog-section-colomn-desc">
                                <h5 className="blog-section-colomn-title">POLITICS</h5>
                                <p className="blog-section-colomn-text">Be a part of politics</p>
                            </div>
                        </div>
                        <div className="blog-section-last-part-top-block-colomns">
                            <img className="blog-section-colomn" src={food} alt="" />
                            <div className="blog-section-colomn-desc">
                                <h5 className="blog-section-colomn-title">FOOD</h5>
                                <p className="blog-section-colomn-text">let the food be finished</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-section-last-part-main-content">
                        <div className="blog-section-main-content-left-part">
                            <div className="blog-section-main-content-block">
                                <div className="blog-section-main-content-block-left">
                                    <div className="info-left">
                                        <p className="info-left-content">Food,Technology</p>
                                        <p className="info-left-content">Politics,Lifestyle</p>
                                        <p className="info-left-content">Mark wiens 👤</p>
                                        <p className="info-left-content">12 Dec,2017 📅</p>
                                        <p className="info-left-content">1.2M views 👁️‍🗨️</p>
                                        <p className="info-left-content">06 comments💬</p>
                                    </div>
                                </div>

                                <div className="blog-section-main-info-block">
                                    <img className="blog-section-main-info-block-image" src={coffee} alt="" />
                                    <h2 className="blog-section-main-info-block-title">Astronomy Binoculars A Great Alternative</h2>
                                    <p className="blog-section-main-info-block-text">MCSE boot camps have its supporters and its detractors. Some people do not understand
                                        why you should have to spend money on boot camp when you can get the MCSE study materials
                                        yourself at a fraction.</p>
                                    <NavLink to="/viewmore" exact activeClassName="active" className="blog-section-main-info-block-link">View More</NavLink>

                                </div>
                            </div>
                            <div className="blog-section-main-content-block">
                                <div className="blog-section-main-content-block-left">
                                    <div className="info-left">
                                        <p className="info-left-content">Food,Technology</p>
                                        <p className="info-left-content">Politics,Lifestyle</p>
                                        <p className="info-left-content">Mark wiens 👤</p>
                                        <p className="info-left-content">12 Dec,2017 📅</p>
                                        <p className="info-left-content">1.2M views 👁️‍🗨️</p>
                                        <p className="info-left-content">06 comments💬</p>
                                    </div>

                                </div>
                                <div className="blog-section-main-info-block">
                                    <img className="blog-section-main-info-block-image" src={forest} alt="" />
                                    <h2 className="blog-section-main-info-block-title">Astronomy Binoculars A Great Alternative</h2>
                                    <p className="blog-section-main-info-block-text">MCSE boot camps have its supporters and its detractors. Some people do not understand
                                        why you should have to spend money on boot camp when you can get the MCSE study materials
                                        yourself at a fraction.</p>
                                    <NavLink to="/viewmore" exact activeClassName="active" className="blog-section-main-info-block-link">View More</NavLink>
                                </div>
                            </div>
                            <div className="blog-section-main-content-block">
                                <div className="blog-section-main-content-block-left">
                                    <div className="info-left">
                                        <p className="info-left-content">Food,Technology</p>
                                        <p className="info-left-content">Politics,Lifestyle</p>
                                        <p className="info-left-content">Mark wiens 👤</p>
                                        <p className="info-left-content">12 Dec,2017 📅</p>
                                        <p className="info-left-content">1.2M views 👁️‍🗨️</p>
                                        <p className="info-left-content">06 comments💬</p>
                                    </div>

                                </div>
                                <div className="blog-section-main-info-block">
                                    <img className="blog-section-main-info-block-image" src={wedding} alt="" />
                                    <h2 className="blog-section-main-info-block-title">Astronomy Binoculars A Great Alternative</h2>
                                    <p className="blog-section-main-info-block-text">MCSE boot camps have its supporters and its detractors. Some people do not understand
                                        why you should have to spend money on boot camp when you can get the MCSE study materials
                                        yourself at a fraction.</p>
                                    <a className="blog-section-main-info-block-link" href="">View More</a>
                                </div>
                            </div>
                            <div className="blog-section-main-content-block">
                                <div className="blog-section-main-content-block-left">
                                    <div className="info-left">
                                        <p className="info-left-content">Food,Technology</p>
                                        <p className="info-left-content">Politics,Lifestyle</p>
                                        <p className="info-left-content">Mark wiens 👤</p>
                                        <p className="info-left-content">12 Dec,2017 📅</p>
                                        <p className="info-left-content">1.2M views 👁️‍🗨️</p>
                                        <p className="info-left-content">06 comments💬</p>
                                    </div>

                                </div>
                                <div className="blog-section-main-info-block">
                                    <img className="blog-section-main-info-block-image" src={city} alt="" />
                                    <h2 className="blog-section-main-info-block-title">Astronomy Binoculars A Great Alternative</h2>
                                    <p className="blog-section-main-info-block-text">MCSE boot camps have its supporters and its detractors. Some people do not understand
                                        why you should have to spend money on boot camp when you can get the MCSE study materials
                                        yourself at a fraction.</p>
                                    <NavLink to="/viewmore" exact activeClassName="active" className="blog-section-main-info-block-link">View More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="blog-section-main-content-right-part">
                            <div className="blog-section-main-content-right-part-content">
                                <input className="blog-section-right-search-input" type="text" placeholder="Search Posts" />
                                <div className="blog-section-author">
                                    <img src={author} alt="" />
                                    <h4 className="author-name">Charlie Barber</h4>
                                    <p className="author-position">Senior Blog writer</p>
                                    <div className="social-media-logos">
                                        <img src={instagram} alt="" />
                                        <img src={facebook} alt="" />
                                        <img src={github} alt="" />
                                        <img src={linkedin} alt="" />
                                    </div>
                                    <p className="author-text">Boot camps have its supporters andit sdetractors.
                                        Some people do not understand why you should have to spend money on boot
                                        camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                                </div>
                                <div className="popular-posts">Popular Posts</div>
                                <div className="post">
                                    <img src={post1} alt="" />
                                    <div className="post-desc">
                                        <h3 className="post-desc-title">Space the final frontier</h3>
                                        <p className="post-desc-time">02 hours ago</p>
                                    </div>
                                </div>
                                <div className="post">
                                    <img src={post2} alt="" />
                                    <div className="post-desc">
                                        <h3 className="post-desc-title">The Amazing Hubble</h3>
                                        <p className="post-desc-time">02 hours ago</p>
                                    </div>
                                </div>
                                <div className="post">
                                    <img src={post3} alt="" />
                                    <div className="post-desc">
                                        <h3 className="post-desc-title">Astronomy or Astrology</h3>
                                        <p className="post-desc-time">03 hours ago</p>
                                    </div>
                                </div>
                                <div className="post">
                                    <img src={post4} alt="" />
                                    <div className="post-desc">
                                        <h3 className="post-desc-title">Asteroids Telescope</h3>
                                        <p className="post-desc-time">01 hours ago</p>
                                    </div>
                                </div>
                                <div className="popular-posts">Post Categories</div>
                                <div className="categories">
                                    <p>Technology</p>
                                    <p>37</p>
                                </div>
                                <div className="categories">
                                    <p>Lifestyle</p>
                                    <p>24</p>
                                </div>
                                <div className="categories">
                                    <p>Fashion</p>
                                    <p>59</p>
                                </div>
                                <div className="categories">
                                    <p>Art</p>
                                    <p>29</p>
                                </div>
                                <div className="categories">
                                    <p>Food</p>
                                    <p>15</p>
                                </div>
                                <div className="categories">
                                    <p>Architecture</p>
                                    <p>09</p>
                                </div>
                                <div className="categories">
                                    <p>Adventure</p>
                                    <p>44</p>
                                </div>
                                <div className="blog-section-newsletter-block">
                                    <div className="popular-posts">Newsletter</div>
                                    <p className="blog-section-newsletter-block-text">
                                        Here, I focus on a range of items and features that we use in life without
                                        giving them a second thought.
                                    </p>
                                    <div className="blog-section-newsletter-block-input-button">
                                        <input className="blog-section-newsletter-block-input" type="text" placeholder="Enter email" />
                                        <button className="blog-section-newsletter-block-button">Subscribe</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}