import React from "react";
import "./view-more.css";
import largephoto from "./assets/view-more-img-large.webp";
import postmore from "./assets/post-img1.jpg.webp";
import postmore2 from "./assets/post-img2.jpg.webp";
import author from "./assets/author.png.webp";
import instagram from "./assets/instagramblog.svg";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin-in.svg"
import github from "./assets/github.svg";
import post1 from "./assets/post1.jpg.webp";
import post2 from "./assets/post2.jpg.webp";
import post3 from "./assets/post3.jpg.webp";
import post4 from "./assets/post4.jpg.webp";
import profilephoto1 from "./assets/c1.jpg.webp";
import profilephoto2 from "./assets/c2.jpg.webp";
import profilephoto3 from "./assets/c3.jpg.webp";
import profilephoto4 from "./assets/c4.jpg.webp";
import profilephoto5 from "./assets/c5.jpg.webp";
export default function ViewMore() {
    return (

        <>
            <div className="about-block-after-header">
                <div className="about-block-after-header-content">
                    <h3 className="about-block-after-header-nav1">Home → Blog Details </h3>
                    <h1 className="about-block-after-header-nav">BLOG DETAILS</h1>
                </div>
            </div>
            <div className="view-more-block">
                <div className="view-more-content">
                    <div className="view-more-left">
                        <img className="view-more-left-image" src={largephoto} alt="" />
                        <div className="view-more-left-desc">
                            <div className="info-left">
                                <p className="info-left-content">Food,Technology</p>
                                <p className="info-left-content">Politics,Lifestyle</p>
                                <p className="info-left-content">Mark wiens 👤</p>
                                <p className="info-left-content">12 Dec,2017 📅</p>
                                <p className="info-left-content">1.2M views 👁️‍🗨️</p>
                                <p className="info-left-content">06 comments💬</p>
                            </div>
                            <div className="view-more-left-desc-right-part">
                                <h2 className="view-more-left-desc-right-part-title">Astronomy Binoculars A Great Alternative</h2>
                                <p className="view-more-left-desc-right-part-text">
                                    MCSE boot camps have its supporters and its detractors.
                                    Some people do not understand why you should have to spend money on boot
                                    camp when you can get the MCSE study materials yourself at a fraction.</p>
                                <p className="view-more-left-desc-right-part-text">
                                    Boot camps have its supporters and its detractors.
                                    Some people do not understand why you should have to spend money on boot
                                    camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed</p>
                                <p className="view-more-left-desc-right-part-text">
                                    Boot camps have its supporters and its detractors.
                                    Some people do not understand why you should have to spend money on boot
                                    camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed</p>
                            </div>
                        </div>
                        <p className="view-more-left-after-desc">
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However,
                            who has the willpower to actually sit through a self-imposed MCSE training.

                        </p>
                        <div className="view-more-posts">
                            <img className="view-more-post" src={postmore} alt="" />
                            <img className="view-more-post" src={postmore2} alt="" />
                        </div>
                        <div className="commentary-section">
                            <h4 className="commentary-section-title">05 Comments</h4>
                            <div className="commentary-block">
                                <div className="commentary-block-left">
                                    <img className="commentray-block-image" src={profilephoto1} alt="" />
                                    <div className="commentary-info">
                                        <h4 className="commentary-info-nickname">Emilly Bunt</h4>
                                        <p className="commentary-info-date">
                                            December 4, 2017 at 3:12 pm
                                        </p>
                                        <p className="commentary">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div className="commentary-block-right">Reply</div>
                            </div>
                            <div className="commentary-block">
                                <div className="commentary-block-left">
                                    <img className="commentray-block-image" src={profilephoto2} alt="" />
                                    <div className="commentary-info">
                                        <h4 className="commentary-info-nickname">Emilly Bunt</h4>
                                        <p className="commentary-info-date">
                                            December 4, 2017 at 3:12 pm
                                        </p>
                                        <p className="commentary">
                                            Kravaci,mne nravitsya
                                        </p>
                                    </div>
                                </div>
                                <div className="commentary-block-right">Reply</div>
                            </div>
                            <div className="commentary-block">
                                <div className="commentary-block-left">
                                    <img className="commentray-block-image" src={profilephoto3} alt="" />
                                    <div className="commentary-info">
                                        <h4 className="commentary-info-nickname">Emilly Bunt</h4>
                                        <p className="commentary-info-date">
                                            December 4, 2017 at 3:12 pm
                                        </p>
                                        <p className="commentary">
                                            Your are very good at that!
                                        </p>
                                    </div>
                                </div>
                                <div className="commentary-block-right">Reply</div>
                            </div>
                            <div className="commentary-block">
                                <div className="commentary-block-left">
                                    <img className="commentray-block-image" src={profilephoto4} alt="" />
                                    <div className="commentary-info">
                                        <h4 className="commentary-info-nickname">Emilly Bunt</h4>
                                        <p className="commentary-info-date">
                                            December 4, 2017 at 3:12 pm
                                        </p>
                                        <p className="commentary">
                                            Wowwwww!
                                        </p>
                                    </div>
                                </div>
                                <div className="commentary-block-right">Reply</div>
                            </div>
                            <div className="commentary-block">
                                <div className="commentary-block-left">
                                    <img className="commentray-block-image" src={profilephoto5} alt="" />
                                    <div className="commentary-info">
                                        <h4 className="commentary-info-nickname">Emilly Bunt</h4>
                                        <p className="commentary-info-date">
                                            December 4, 2017 at 3:12 pm
                                        </p>
                                        <p className="commentary">
                                            Never say goodbye!
                                        </p>
                                    </div>
                                </div>
                                <div className="commentary-block-right">Reply</div>
                            </div>
                            
                        </div>
                        <div className="reply-section">
                            <h4>Leave Reply</h4>
                            <div className="input-group">
                                <input className="input-group-name" type="text" placeholder="Enter Name" />
                                <input className="input-group-email" type="text" placeholder="Enter Email Address"/>
                            </div>
                            
                            <input className="reply-section-subject" type="text" placeholder="Subject" />
                            <textarea className="reply-section-textarea"   id="" placeholder="Message" ></textarea>
                            <div className="reply-section-button"><button className="reply-section-btn">
                                Leave Comment
                                </button>
                                </div>
                        </div>
                    </div>
                    <div className="view-more-right">
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
        </>
    )
}