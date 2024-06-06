import React from "react";
import "./newsletter.css";
export default function NewsLetter(){
    return(
        <div className="newsletter-main-block">
            <div className="newsletter-main-block-content">
                <div className="newsletter-main-block-content-left-side">
                    <h1 className="newsletter-main-block-content-left-side-title">Subscribe Our Newsletter</h1>
                    <p className="newsletter-main-block-content-left-side-text">We won’t send any kind of spam</p>
                </div>
    
                <div className="newsletter-main-block-content-right-side">
                    <input className="newsletter-main-block-content-right-side-input" type="mail" placeholder="Enter email address" />
                    <button className="newsletter-main-block-content-right-side-btn">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}